
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProducts } from '../lib/shopify.ts';
import { Product } from '../types.ts';
import ProductCard from './ProductCard.tsx';

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <section id="shop" className="py-24 md:py-32 bg-[#f8b0b2]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
            <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Shop Way Ahead
            </motion.h2>
            <div className="w-24 h-1 bg-[#ec1c24] rounded-full mt-6"></div>
        </div>

        {loading ? (
          <div className="text-center text-slate-900/60 font-medium italic">Brewing the shop...</div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Shop;
