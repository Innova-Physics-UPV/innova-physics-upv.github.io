import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface NewsArticle {
  title: string;
  summary: string;
  imageUrl?: string;
}

interface SocialMediaPost {
  platform: string;
  content: string;
  author: string;
  timestamp: string;
  imageUrl?: string;
}

const NewsPage: React.FC = () => {
  // Placeholder data
  const mainArticle: NewsArticle = {
    title: 'El futuro de la aceleración de partículas: tecnología que roza la velocidad de la luz',
    summary: 'Los últimos avances en aceleradores de partículas están transformando la investigación en física cuántica y salud. El CERN lidera proyectos que podrían revolucionar desde la medicina hasta la computación cuántica.',
    imageUrl: '/imagenes/noticias/acelerador-principal.png'
  };
  
  const secondaryArticles: NewsArticle[] = [
    {
      title: 'CERN desarrolla un nuevo colisionador de partículas 10 veces más potente',
      summary: 'El proyecto FCC (Future Circular Collider) está diseñado para ampliar los límites de la física de partículas más allá del LHC.',
      imageUrl: '/imagenes/noticias/cern-colisionador.jpg'
    },
    {
      title: 'Aceleradores de partículas aplicados a la medicina: Protonterapia',
      summary: 'Técnicas avanzadas de protonterapia están salvando vidas gracias a tecnología proveniente de los aceleradores.',
      imageUrl: '/imagenes/noticias/protonterapia.jpg'
    },
    {
      title: 'Materia Oscura: ¿el próximo gran hallazgo del CERN?',
      summary: 'Detectar partículas de materia oscura sigue siendo uno de los mayores retos para la física moderna.',
      imageUrl: '/imagenes/noticias/materia-oscura.jpg'
    }
  ];

  const cernNews: NewsArticle[] = [
    {
      title: 'El CERN descubre nuevas propiedades del bosón de Higgs',
      summary: 'Un paso más en la comprensión del universo.',
      imageUrl: '/imagenes/noticias/higgs.jpg'
    },
    {
      title: 'Nuevos experimentos en el LHCb revelan anomalías cuánticas',
      summary: 'Resultados que podrían cambiar teorías actuales.',
      imageUrl: '/imagenes/noticias/lhcp.webp'
    },
    {
      title: 'Abren las puertas del CERN al público este verano',
      summary: 'Una experiencia inmersiva en el corazón de la ciencia.',
      imageUrl: '/imagenes/noticias/cern.jpeg'
    },
    {
      title: 'CERN y su compromiso con energías limpias en sus instalaciones',
      summary: 'Tecnología sostenible para grandes experimentos.',
      imageUrl: '/imagenes/noticias/energias-limpias.jpg'
    }
  ];
  
  

  const socialMediaPosts: SocialMediaPost[] = [
    {
      platform: 'Twitter',
      content: 'Exciting breakthrough in quantum research! #Science #Innovation',
      author: '@CernOfficial',
      timestamp: '2h ago',
      imageUrl: '/imagenes/socialMedia/60.webp'
    },
    {
      platform: 'Facebook',
      content: 'Join us for our upcoming webinar on particle physics.',
      author: 'CERN Research Center',
      timestamp: '1d ago'
    },
    {
      platform: 'Instagram',
      content: 'Behind the scenes at our latest experiment!',
      author: '@cern_research',
      timestamp: '3d ago'
    },
    {
      platform: 'LinkedIn',
      content: 'New research paper published on quantum mechanics.',
      author: 'CERN Research Team',
      timestamp: '4d ago'
    },
    {
      platform: 'YouTube',
      content: 'Watch our latest experiment explained in 5 minutes!',
      author: 'CERN Channel',
      timestamp: '5d ago'
    },
    {
      platform: 'TikTok',
      content: 'Science can be fun! Check out our latest experiment.',
      author: '@cern_fun_science',
      timestamp: '6d ago'
    }
  ];

  // Carousel settings for multiple items
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 posts at once
    slidesToScroll: 3, // Scroll 3 at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">NOTICIAS</h1>
      
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {/* Main Article Section */}
        <div className="md:col-span-2 flex flex-col space-y-6">
          <div className="bg-background rounded-lg overflow-hidden shadow-md">
            <img 
              src={mainArticle.imageUrl} 
              alt={mainArticle.title} 
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{mainArticle.title}</h2>
              <p className="text-foreground">{mainArticle.summary}</p>
            </div>
          </div>

          {/* Secondary Articles */}
          <div className="space-y-6 py-10 flex-grow">
            {secondaryArticles.map((article, index) => (
              <div key={index} className="bg-background rounded-lg shadow-md overflow-hidden flex items-center">
                <div className="rounded-lg shadow-md overflow-hidden flex-shrink-0">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-48 h-48 object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm">{article.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cern Section 
        <div className="overflow-y-auto pr-2" style={{ maxHeight: 'calc(180vh)' }}>
          <h2 className="text-2xl font-bold mb-4 text-center text-foreground">CERN</h2>

          {cernNews.map((article, index) => (
            <div key={index} className="flex items-center justify-between mb-4 bg-background p-4 rounded shadow">
              <div className="flex-1 pr-4">
                <h4 className="font-semibold mb-2 text-foreground">{article.title}</h4>
                <p className="text-sm text-foreground">{article.summary}</p>
              </div>

              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={article.imageUrl || '/imagenes/noticias/cern-default.jpg'} 
                  alt={article.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
        */}
      </div>

      {/* Social Media Carousel */}
      <div className="mt-8 bg-background rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Social Media</h3>
        <Slider {...carouselSettings}>
          {socialMediaPosts.map((post, index) => (
            <div key={index} className="px-2">
              <div className="bg-background rounded-lg shadow-md p-4 h-full">

                
                <p className="font-medium mb-2 text-sm">
                  {post.content}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-foreground">
                    {post.author}
                  </span>
                  <span className="text-xs text-foreground">
                    {post.platform} 
                    {' • '}
                    {post.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

     
    </div>
  );
};

export default NewsPage;