import React, { useState, useEffect, useRef } from 'react';

const PriceCalculator = () => {
  const services = [
    {
      id: 'site',
      label: 'Изработка на сайт (5 страници)',
      price: 300,
      bonus: null
    },
    {
      id: 'seo',
      label: 'SEO оптимизация',
      price: 300,
      bonus: null
    },
    {
      id: 'maintenance',
      label: 'Месечна поддръжка (SEO + сайт)',
      price: 300,
      bonus: 'Бонус: Безплатен GAds акаунт или Дигитален маркетинг (5 публ. + 2 видеа)'
    },
    {
      id: 'gads',
      label: 'Google Ads управление (+300 месечно бюджет)',
      price: 300,
      bonus: 'Бонус: Дигитален маркетинг в социалните мрежи'
    },
  ];

  const [selectedServices, setSelectedServices] = useState([]);
  const canvasRef = useRef(null);

  const toggleService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const total = selectedServices.reduce((sum, id) => {
      const service = services.find(s => s.id === id);
      return sum + (service ? service.price : 0);
    }, 0);

    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#2c3e50';

    if (total > 0) {
      ctx.fillText(`Общо: ${total}€`, 20, 40);

      ctx.font = '16px Arial';
      ctx.fillStyle = '#27ae60';
      let yOffset = 70;

      selectedServices.forEach(id => {
        const service = services.find(s => s.id === id);
        if (service && service.bonus) {
          ctx.fillText(`✔ ${service.bonus}`, 20, yOffset);
          yOffset += 25;
        }
      });

      ctx.font = 'italic bold 14px Arial';
      ctx.fillStyle = '#c0392b';
      ctx.fillText('Всичко над тези цени е необоснована претенция', 20, yOffset + 10);
      ctx.fillText('и нахален каприз!', 20, yOffset + 30);
    } else {
      ctx.font = '18px Arial';
      ctx.fillStyle = '#7f8c8d';
      ctx.fillText('Изберете услуга, за да видите цена...', 20, 40);
    }
  }, [selectedServices]);

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>Калкулатор за услуги</h3>
      <div style={styles.menu}>
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              ...styles.item,
              backgroundColor: selectedServices.includes(service.id) ? '#e8f6f3' : '#fff',
              borderColor: selectedServices.includes(service.id) ? '#1abc9c' : '#ddd'
            }}
            onClick={() => toggleService(service.id)}
          >
            <div style={styles.row}>
              <span style={styles.checkmark}>
                {selectedServices.includes(service.id) ? '☑' : '☐'}
              </span>
              <span style={styles.label}>{service.label}</span>
              <span style={styles.priceTag}>{service.price}€</span>
            </div>
            {service.bonus && (
              <div style={styles.bonusText}>🎁 {service.bonus}</div>
            )}
          </div>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        style={styles.canvas}
        aria-label="Калкулирана цена"
      />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  header: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  item: {
    padding: '15px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkmark: {
    fontSize: '20px',
    marginRight: '10px',
    color: '#1abc9c'
  },
  label: {
    fontWeight: 'bold',
    flex: 1
  },
  priceTag: {
    fontWeight: 'bold',
    color: '#e67e22'
  },
  bonusText: {
    marginTop: '8px',
    fontSize: '12px',
    color: '#16a085',
    paddingLeft: '30px'
  },
  canvas: {
    width: '100%',
    marginTop: '20px',
    border: '2px dashed #bdc3c7',
    borderRadius: '8px',
    backgroundColor: '#fff'
  }
};

export default PriceCalculator;
