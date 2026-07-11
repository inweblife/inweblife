const CookieConsent = ({ onAccept, onReject }) => {
  return (
    <div className="cookieBanner" role="dialog" aria-live="polite" aria-label="Съгласие за бисквитки">
      <p>
        Използваме бисквитки за анализ на трафика (Google Analytics), за да разбираме как се използва сайтът.
        Можете да приемете или откажете.
      </p>
      <div className="cookieBannerActions">
        <button type="button" className="cookieBannerReject" onClick={onReject}>
          Отказвам
        </button>
        <button type="button" className="cookieBannerAccept" onClick={onAccept}>
          Приемам
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
