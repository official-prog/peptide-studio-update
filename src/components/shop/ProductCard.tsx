import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Product } from "@/data/products";
import { formatGBP, useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Plus, ShieldCheck } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 8, y: dx * 8 });
    setShine({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setShine({ x: 50, y: 50 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="product-card-3d"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(8px)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      }}
    >
      {/* Shine overlay */}
      {hovered && (
        <div
          className="product-card-shine"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, hsl(222 85% 70% / 0.18) 0%, transparent 65%)`,
          }}
          aria-hidden
        />
      )}

      {/* Image */}
      <Link to={`/product/${product.slug}`} className="product-card-img-wrap">
        <img
          src={product.image}
          alt={`${product.name} ${product.size} research peptide vial`}
          className="product-card-img"
          loading="lazy"
          width={1024}
          height={1024}
        />
        <span className="product-card-badge">{product.category}</span>
        <span className="product-card-zoom-hint" aria-hidden>View</span>
      </Link>

      {/* Body */}
      <div className="product-card-body">
        <p className="product-card-code">
          {product.code} · <span className="text-accent">{product.purity}</span>
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-card-title">
            {product.name}
            <span className="product-card-size"> · {product.size}</span>
          </h3>
        </Link>
        <p className="product-card-desc">{product.short}</p>

        <div className="product-card-trust">
          <ShieldCheck className="h-3 w-3 text-accent" />
          <span>COA Verified</span>
        </div>

        <div className="product-card-footer">
          <span className="product-card-price">{formatGBP(product.price)}</span>
          <Button
            size="sm"
            onClick={() => add(product)}
            className="product-card-btn"
          >
            <Plus className="h-3.5 w-3.5" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
