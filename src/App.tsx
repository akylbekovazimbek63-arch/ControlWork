import { ProductCard } from './ProductCard';

const PRODUCTS = [
  { id: 1, title: 'Смартфон' },
  { id: 2, title: 'Ноутбук' },
  { id: 3, title: 'Наушники' },
  { id: 4, title: 'Часы' },
];

const IMAGES = [
  'https://asiastore.kg/image/cache/catalog/1newpage/apple/iphone/iphone17/iphone17promax/deepblue/iphone_17_pro_max_deep_blue_pdp_image_position_1__ce-ww-1200x1200.jpg',
  'https://bobbystore.kg/wa-data/public/shop/products/17/48/74817/images/40012/40012.970.jpg',
  'https://afm.kg/d/p9_plus.jpg',
  'https://depsto.com/image/cache//catalog/category/koshelki/newmodelsofwatches/curren-sports-watches-men-fashion-army-quartz-watches-casual-waterproof-wristwatch-male-leather-calendar-clock-relogio.jpg_640x640-800x800.jpg',
];

function App() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        Интернет-магазин
      </h1>
      
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        flexWrap: 'wrap', 
        justifyContent: 'center' 
      }}>
        {PRODUCTS.map((item) => (
          <ProductCard 
            key={item.id} 
            product={item} 
            images={IMAGES} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;