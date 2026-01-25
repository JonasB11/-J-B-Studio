import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getConcertById } from '../../data/concerts';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useDocumentTitle } from '../../hooks';
import styles from './ConcertDetail.module.css';

function formatDate(dateString: string): string {
  try {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch {
    return dateString;
  }
}

export function ConcertDetailView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const concert = id ? getConcertById(parseInt(id, 10)) : undefined;

  useDocumentTitle(concert ? `${concert.artist?.name || 'Unknown'} Concert` : 'Concert Not Found');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!concert) {
    return (
      <section className={styles.concertDetail}>
        <div className={styles.notFound}>
          <h2>Concert Not Found</h2>
          <p>The concert you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/concerts')} className={styles.backButton}>
            <i className="fas fa-arrow-left"></i>
            Back to Concerts
          </button>
        </div>
      </section>
    );
  }

  // Safely destructure with defaults
  const { artist, date = '', description = '', tags = [], companions = [], images = [] } = concert;
  const details = artist?.details;
  const social = artist?.social;
  const formattedDate = formatDate(date);
  const songCount = details?.setlist?.length ?? 0;

  return (
    <section className={styles.concertDetail} data-artist={artist?.id}>
      <div className={styles.concertHeader}>
        <div className={styles.artistProfile}>
          <ImageWithFallback
            src={artist?.image}
            alt={artist?.name || 'Artist'}
            className={styles.artistProfileImage}
          />
          <div className={styles.artistProfileInfo}>
            <h2>{artist?.name || 'Unknown Artist'}</h2>
            <div className={styles.concertDate}>{formattedDate}</div>
            {social && (social.spotify || social.youtube || social.instagram) && (
              <div className={styles.artistSocialLinks}>
                {social.spotify && (
                  <a
                    href={social.spotify}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Spotify"
                  >
                    <i className="fab fa-spotify"></i>
                  </a>
                )}
                {social.youtube && (
                  <a
                    href={social.youtube}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                )}
                {social.instagram && (
                  <a
                    href={social.instagram}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {images.length > 0 && (
        <div className={styles.concertGallery}>
          {images.map((image, index) => (
            <ImageWithFallback
              key={index}
              src={image}
              alt={`${artist?.name || 'Concert'} photo ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className={styles.concertInfo}>
        {description && (
          <div className={styles.infoSection}>
            <h3>About the Artist</h3>
            <p>{description}</p>
          </div>
        )}

        <div className={styles.infoSection}>
          <h3>Concert Details</h3>
          <div className={styles.concertMeta}>
            {(details?.venue || details?.city) && (
              <div className={styles.metaItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  {[details?.venue, details?.city].filter(Boolean).join(', ')}
                </span>
              </div>
            )}
            <div className={styles.metaItem}>
              <i className="fas fa-calendar"></i>
              <span>{formattedDate}</span>
            </div>
            {songCount > 0 && (
              <div className={styles.metaItem}>
                <i className="fas fa-music"></i>
                <span>{songCount} Songs</span>
              </div>
            )}
            {companions.length > 0 && (
              <div className={styles.metaItem}>
                <i className="fas fa-users"></i>
                <span>Went with: {companions.join(', ')}</span>
              </div>
            )}
          </div>
        </div>

        {details?.supportActs && details.supportActs.length > 0 && (
          <div className={styles.infoSection}>
            <h3>Support Acts</h3>
            <ul className={styles.supportActsList}>
              {details.supportActs.map((act, index) => (
                <li key={index} className={styles.supportActItem}>
                  <span className={styles.actName}>{act.name}</span>
                  {act.type && (
                    <span className={styles.actType}>{act.type}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {details?.setlist && details.setlist.length > 0 && (
          <div className={styles.infoSection}>
            <h3>Setlist</h3>
            <ul className={styles.setlist}>
              {details.setlist.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
            </ul>
          </div>
        )}

        {tags.length > 0 && (
          <div className={styles.infoSection}>
            <h3>Highlights</h3>
            <ul className={styles.highlights}>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link to="/concerts" className={styles.artistLink}>
        <i className="fas fa-arrow-left"></i>
        Back to Concerts
      </Link>
    </section>
  );
}
