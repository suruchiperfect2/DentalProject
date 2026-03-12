import React from 'react'
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108777-766d4e0286b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      rating: 5,
      comment: "Dr. Prity is an amazing dentist! She made my root canal procedure completely painless. The clinic is very clean and the staff is extremely friendly. Highly recommend!",
      treatment: "Root Canal Treatment"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Bandra West",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      rating: 5,
      comment: "I got my dental implants done here and the results are fantastic. The team was very professional and explained everything in detail. Great experience overall!",
      treatment: "Dental Implants"
    },
    {
      id: 3,
      name: "Anjali Desai",
      location: "Juhu",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      rating: 5,
      comment: "My daughter was very scared of dental visits but Dr. Prity handled her so well. The kids' play area and friendly staff made it a wonderful experience. Thank you!",
      treatment: "Pediatric Dentistry"
    },
    {
      id: 4,
      name: "Vikram Mehta",
      location: "Andheri",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      rating: 5,
      comment: "Best dental clinic in Mumbai! The teeth whitening treatment was quick and effective. Modern equipment and very hygienic environment. Will definitely come back.",
      treatment: "Teeth Whitening"
    },
    {
      id: 5,
      name: "Neha Gupta",
      location: "Worli",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      rating: 4,
      comment: "I had a great experience with my Invisalign treatment. The progress tracking and regular check-ups were very helpful. My smile looks perfect now!",
      treatment: "Clear Aligners"
    },
    {
      id: 6,
      name: "Suresh Patel",
      location: "Dadar",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      rating: 5,
      comment: "Very reasonable prices and excellent service. The doctor took time to understand my problem and suggested the best treatment option. Highly recommended!",
      treatment: "General Checkup"
    }
  ];

  // Stats data
  const stats = [
    { number: "5000+", label: "Happy Patients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Treatments" },
    { number: "4.9", label: "Google Rating" }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
        size={16}
        fill={index < rating ? '#fbbf24' : 'none'}
        color={index < rating ? '#fbbf24' : '#d1d5db'}
      />
    ));
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Happy Patients" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Testimonials</h1>
          <p className="hero-subtitle">Real Stories from Our Happy Patients</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">Read genuine reviews from patients who trusted us with their smile</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <Quote className="quote-icon" size={32} />
                
                <div className="patient-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="patient-image"
                    loading="lazy"
                  />
                  <div className="patient-info">
                    <h3 className="patient-name">{testimonial.name}</h3>
                    <p className="patient-location">{testimonial.location}</p>
                  </div>
                </div>

                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="patient-comment">"{testimonial.comment}"</p>

                <div className="treatment-tag">
                  {testimonial.treatment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="video-section">
        <div className="container">
          <h2 className="section-title">Video Testimonials</h2>
          <p className="section-subtitle">Watch our patients share their experiences</p>
          
          <div className="video-grid">
            <div className="video-card">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Video testimonial" 
                className="video-thumbnail"
              />
              <div className="play-button">▶</div>
              <p className="video-title">Smile Makeover Journey</p>
            </div>
            
            <div className="video-card">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Video testimonial" 
                className="video-thumbnail"
              />
              <div className="play-button">▶</div>
              <p className="video-title">Dental Implant Experience</p>
            </div>
            
            <div className="video-card">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Video testimonial" 
                className="video-thumbnail"
              />
              <div className="play-button">▶</div>
              <p className="video-title">Root Canal Recovery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews CTA */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3>Share Your Experience</h3>
            <p>We'd love to hear about your experience at Dr. Prity Raushan Dental Clinic</p>
            <button className="cta-button">
              Write a Review on Google
            </button>
          </div>
        </div>
      </div>
      
      {/* ✅ FIXED: Removed jsx="true" attribute */}
      <style>{`
        .testimonials-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          line-height: 1.5;
          background-color: #ffffff;
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 450px;
          overflow: hidden;
          background: linear-gradient(135deg, #0d9488 0%, #115e59 100%);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.25;
          mix-blend-mode: overlay;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 20px;
          background: rgba(0,0,0,0.1);
        }

        .hero-title {
          font-size: clamp(48px, 10vw, 72px);
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 20px;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
          animation: fadeInDown 0.8s ease;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff, #f0fdfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(18px, 4vw, 24px);
          font-weight: 400;
          max-width: 700px;
          margin: 0 auto;
          opacity: 0.95;
          animation: fadeInUp 0.8s ease;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Stats Section */
        .stats-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .stat-card {
          text-align: center;
          padding: 20px;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 800;
          color: #0d9488;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          font-size: 16px;
          color: #64748b;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 80px 0;
          background: #ffffff;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 40px);
          font-weight: 700;
          color: #115e59;
          text-align: center;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: #64748b;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 50px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 40px -12px rgba(13, 148, 136, 0.15);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 50px -12px rgba(13, 148, 136, 0.25);
          border-color: #99f6e4;
        }

        .quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #99f6e4;
          opacity: 0.3;
        }

        .patient-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .patient-image {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #0d9488;
        }

        .patient-info {
          flex: 1;
        }

        .patient-name {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .patient-location {
          font-size: 14px;
          color: #64748b;
        }

        .rating {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .star {
          transition: all 0.2s ease;
        }

        .patient-comment {
          font-size: 15px;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 20px;
          font-style: italic;
        }

        .treatment-tag {
          display: inline-block;
          padding: 6px 12px;
          background: #f0fdfa;
          color: #0d9488;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid #99f6e4;
        }

        /* Video Section */
        .video-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%);
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .video-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .video-thumbnail {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .video-card:hover .video-thumbnail {
          transform: scale(1.1);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          background: #0d9488;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          opacity: 0.9;
          transition: all 0.3s ease;
        }

        .video-card:hover .play-button {
          background: #115e59;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .video-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 15px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          font-size: 14px;
          font-weight: 600;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #0d9488 0%, #115e59 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .cta-content p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cta-button {
          background: white;
          color: #0d9488;
          border: none;
          padding: 16px 40px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          background: #f8fafc;
        }

        /* Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .video-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 350px;
          }
          
          .hero-title {
            font-size: 48px;
          }
          
          .hero-subtitle {
            font-size: 20px;
          }
          
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .video-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .stat-card {
            padding: 15px;
          }
          
          .stat-number {
            font-size: 36px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 300px;
          }
          
          .hero-title {
            font-size: 40px;
          }
          
          .hero-subtitle {
            font-size: 18px;
            padding: 0 20px;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .testimonial-card {
            padding: 20px;
          }
          
          .patient-image {
            width: 60px;
            height: 60px;
          }
          
          .cta-content h3 {
            font-size: 28px;
          }
          
          .cta-content p {
            font-size: 16px;
          }
          
          .cta-button {
            padding: 14px 30px;
            font-size: 16px;
          }
        }

        @media (max-width: 360px) {
          .hero-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  )
}

export default Testimonials;





