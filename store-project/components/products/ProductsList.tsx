import { formatCurrency } from "@/app/utils/format";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Image from "next/image";
import FavoriteToggleButton from "./FavouriteToggleButton";
function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, price, image, company } = product;
        const dollarAmt = formatCurrency(product.price);
        return (
          <article key={product.id} className="group relative">
            <Link href={`/products/${product.id}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw ,(max-width:1200px) 50v,33vw"
                      className="w-full rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold capitalize">{name}</h4>
                    <h4 className="text-muted-foreground">{company}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg md:ml-auto">
                    {dollarAmt}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton productId={product.id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;
