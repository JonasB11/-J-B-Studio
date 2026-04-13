import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { concerts } from '../../data/concerts';
import { events } from '../../data/events';
import { projects } from '../../data/projects';
import { partners } from '../../data/partners';
import { musicPlatforms } from '../../data/music';
import { watchedData } from '../../data/watched';
import { lightShows } from '../../data/lightshows';
import type { Concert, Event, Project, Partner, MusicPlatform } from '../../types';
import type { WatchedItem } from '../../data/watched';
import type { LightShow } from '../../data/lightshows';

export function AdminPage() {
  const [activeTab, setActiveTab] = useState('concerts');

  const [storedConcerts, setStoredConcerts] = useLocalStorage<Concert[]>('jb_concerts', concerts);
  const [storedEvents, setStoredEvents] = useLocalStorage<Event[]>('jb_events', events);
  const [storedProjects, setStoredProjects] = useLocalStorage<Project[]>('jb_projects', projects);
  const [storedPartners, setStoredPartners] = useLocalStorage<Partner[]>('jb_partners', partners);
  const [storedMusic, setStoredMusic] = useLocalStorage<MusicPlatform[]>('jb_music', musicPlatforms);
  const [storedWatched, setStoredWatched] = useLocalStorage<WatchedItem[]>('jb_watched', watchedData);
  const [storedLightshows, setStoredLightshows] = useLocalStorage<LightShow[]>('jb_lightshows', lightShows);

  const tabs: { id: string, label: string, data: any[], setter: (val: any) => void, file: string, exportName: string }[] = [
    { id: 'concerts', label: 'Concerts', data: storedConcerts, setter: setStoredConcerts, file: 'concerts', exportName: 'concerts' },
    { id: 'events', label: 'Events', data: storedEvents, setter: setStoredEvents, file: 'events', exportName: 'events' },
    { id: 'lightshows', label: 'Light Shows', data: storedLightshows, setter: setStoredLightshows, file: 'lightshows', exportName: 'lightShows' },
    { id: 'projects', label: 'Projects', data: storedProjects, setter: setStoredProjects, file: 'projects', exportName: 'projects' },
    { id: 'partners', label: 'Partners', data: storedPartners, setter: setStoredPartners, file: 'partners', exportName: 'partners' },
    { id: 'music', label: 'Music', data: storedMusic, setter: setStoredMusic, file: 'music', exportName: 'musicPlatforms' },
    { id: 'watched', label: 'Watched', data: storedWatched, setter: setStoredWatched, file: 'watched', exportName: 'watchedData' }
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  const [editingItem, setEditingItem] = useState<{ index: number; item: any } | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index: number, item: any) => {
    setEditingItem({ index, item });
    setEditValue(JSON.stringify(item, null, 2));
  };

  const handleCreate = () => {
    if (!currentTab) return;
    const template = currentTab.data.length > 0 ? { ...currentTab.data[0] } : {};

    // Reset properties to default generic values
    for (const key in template) {
      if (typeof template[key] === 'string') template[key] = '';
      else if (typeof template[key] === 'number') template[key] = 0;
      else if (typeof template[key] === 'boolean') template[key] = false;
      else if (Array.isArray(template[key])) template[key] = [];
      else if (typeof template[key] === 'object' && template[key] !== null) template[key] = {};
    }
    setEditingItem({ index: -1, item: template });
    setEditValue(JSON.stringify(template, null, 2));
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(editValue);
      setEditValue(JSON.stringify(parsed, null, 2));
    } catch {
      // Ignore format if invalid
    }
  };

  const commitToFile = async (tab: typeof currentTab, newData: any[]) => {
    if (!tab) return;
    try {
      const res = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file: tab.file, exportName: tab.exportName, data: newData })
      });
      if (!res.ok) console.error("Could not write to local file.", await res.text());
    } catch(err) {
      console.error("Network error when writing to file", err);
    }
  };

  const handleSave = () => {
    if (!currentTab) return;
    try {
      const parsed = JSON.parse(editValue);
      const newData = [...currentTab.data];
      if (editingItem?.index !== -1 && editingItem?.index !== undefined) {
        newData[editingItem.index] = parsed;
      } else {
        newData.push(parsed);
      }
      currentTab.setter(newData);
      setEditingItem(null);
      commitToFile(currentTab, newData);
    } catch (err) {
      alert("Invalid JSON format! Please fix the errors before saving.");
    }
  };

  const handleDelete = (index: number) => {
    if (!currentTab) return;
    if (confirm("Are you sure you want to delete this item?")) {
      const newData = [...currentTab.data];
      newData.splice(index, 1);
      currentTab.setter(newData);
      commitToFile(currentTab, newData);
    }
  };

  const getItemTitle = (item: any) => {
    return item.title || item.name || (item.artist?.name ? `${item.artist.name} (${item.date})` : 'Untitled Item');
  };

  // Custom Dynamic Input components to edit JSON interactively
  const DynamicForm = ({ jsonStr, onChange }: { jsonStr: string, onChange: (val: string) => void }) => {
    try {
      const obj = JSON.parse(jsonStr);

      const updateField = (path: string[], val: any) => {
        const newObj = JSON.parse(JSON.stringify(obj));
        let curr = newObj;
        for (let i = 0; i < path.length - 1; i++) curr = curr[path[i]];
        curr[path[path.length - 1]] = val;
        onChange(JSON.stringify(newObj, null, 2));
      };

      const renderField = (key: string, val: any, path: string[]) => {
        const id = path.join('.');

        if (typeof val === 'string' && val.length > 50) {
           return (
             <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }}>
               <label style={{ fontSize: '0.85rem', color: '#aaa', textTransform: 'capitalize' }}>{key}</label>
               <textarea value={val} onChange={(e) => updateField(path, e.target.value)} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', width: '100%', minHeight: '80px', fontFamily: 'inherit' }} />
             </div>
           );
        }

        if (typeof val === 'string' || typeof val === 'number') {
          return (
            <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
              <label style={{ fontSize: '0.85rem', color: '#aaa', textTransform: 'capitalize' }}>{key}</label>
              <input type={typeof val === 'number' ? 'number' : 'text'} value={val} onChange={(e) => updateField(path, typeof val === 'number' ? Number(e.target.value) : e.target.value)} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', width: '100%' }} />
            </div>
          );
        }

        if (typeof val === 'boolean') {
          return (
             <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: '1 1 200px', marginTop: '1.5rem' }}>
              <input type="checkbox" checked={val} onChange={(e) => updateField(path, e.target.checked)} style={{ width: '18px', height: '18px' }} />
              <label style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'capitalize' }}>{key}</label>
            </div>
          );
        }

        // Handling Objects / Arrays
        return (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', marginTop: '0.5rem' }}>
            <label style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 'bold' }}>{key} <span style={{fontSize: '0.75rem', color: '#777', fontWeight: 'normal'}}>({Array.isArray(val) ? 'Array' : 'Object'})</span></label>
            {Object.entries(val).map(([k, v]) => renderField(k, v, [...path, k]))}
          </div>
        );
      };

      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '1rem' }}>
          {Object.entries(obj).map(([k, v]) => renderField(k, v, [k]))}
        </div>
      );
    } catch {
      return (
         <div style={{ padding: '2rem', background: 'rgba(244,67,54,0.1)', color: '#f44336', borderRadius: '8px', border: '1px solid rgba(244,67,54,0.3)' }}>
           Form preview unavailable due to invalid JSON syntax. Please correct strings in code view.
         </div>
      );
    }
  };

  const [viewMode, setViewMode] = useState<'form' | 'code'>('form');

  return (
    <div className="page-container" style={{ padding: '6rem 2rem 2rem', color: '#fff', maxWidth: '1100px', margin: '0 auto', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(90deg, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Universal Admin Dashboard
      </h1>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Sidebar */}
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setEditingItem(null); }}
              style={{
                padding: '1rem', textAlign: 'left', borderRadius: '8px', cursor: 'pointer', border: 'none',
                background: activeTab === tab.id ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                color: activeTab === tab.id ? '#fff' : '#aaa',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                transition: 'all 0.2s',
                display: 'flex', justifyContent: 'space-between'
              }}
            >
              <span>{tab.label}</span>
              <span style={{ opacity: 0.6 }}>{tab.data.length}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ flex: '3 1 500px', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
          {currentTab && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{currentTab.label} List</h2>
                  <p style={{ color: '#888', margin: '0.2rem 0 0 0', fontSize: '0.9rem' }}>Modifications are saved locally.</p>
                </div>
                <button
                  onClick={handleCreate}
                  style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  + Add New
                </button>
              </div>

              {!editingItem ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {currentTab.data.length === 0 && <p style={{ color: '#888' }}>No items yet.</p>}
                  {currentTab.data.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', borderLeft: '4px solid #555' }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>{getItemTitle(item)}</span>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => handleEdit(idx, item)} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => handleDelete(idx)} style={{ background: 'rgba(244, 67, 54, 0.2)', color: '#ff6b6b', border: '1px solid rgba(244,67,54,0.4)', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animation: 'fadeIn 0.3s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <h3 style={{ margin: 0 }}>{editingItem.index === -1 ? 'Create New Item' : 'Edit Item'}</h3>
                      <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px' }}>
                        <button onClick={() => setViewMode('form')} style={{ background: viewMode === 'form' ? 'rgba(255,255,255,0.2)' : 'transparent', color: '#fff', border: 'none', padding: '0.4rem 1rem', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s' }}>Form</button>
                        <button onClick={() => setViewMode('code')} style={{ background: viewMode === 'code' ? 'rgba(255,255,255,0.2)' : 'transparent', color: '#fff', border: 'none', padding: '0.4rem 1rem', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s' }}>Code</button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {viewMode === 'code' && (
                        <button onClick={handleFormat} style={{ background: 'transparent', color: '#4caf50', border: '1px solid #4caf50', padding: '0.3rem 0.8rem', borderRadius: '6px', cursor: 'pointer' }}>Format JSON</button>
                      )}
                      <button onClick={() => setEditingItem(null)} style={{ background: 'transparent', color: '#aaa', border: '1px solid #555', padding: '0.3rem 0.8rem', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </div>

                  {viewMode === 'code' && (
                    <div style={{ background: 'rgba(255, 152, 0, 0.1)', border: '1px solid rgba(255, 152, 0, 0.3)', padding: '0.8rem', borderRadius: '6px', color: '#ffb74d', fontSize: '0.9rem' }}>
                      <strong>Note:</strong> Edit the JSON data structure carefully. Values must match valid JSON syntax (use double quotes for keys).
                    </div>
                  )}

                  <div style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                    {viewMode === 'form' ? (
                      <DynamicForm jsonStr={editValue} onChange={setEditValue} />
                    ) : (
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        style={{ flex: 1, minHeight: '400px', width: '100%', background: '#111', color: '#4caf50', border: '1px solid #333', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', resize: 'vertical' }}
                        spellCheck={false}
                      />
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '0.5rem' }}>
                    <button onClick={() => setEditingItem(null)} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '0.8rem 2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                      Discard
                    </button>
                    <button onClick={handleSave} style={{ background: '#2196F3', color: 'white', border: 'none', padding: '0.8rem 2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                      Save Item
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

