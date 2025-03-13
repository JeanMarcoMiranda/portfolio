import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { posts } from "@/data/posts";
import { Link, CalendarIcon } from "lucide-react";

interface RecentPostsProps {
  className?: string;
}

const RecentPosts: React.FC<RecentPostsProps> = ({ className }) => {
  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Posts Recientes
            </h2>
            <p className="text-muted-foreground mt-1">
              Últimas publicaciones de mi blog
            </p>
          </div>
          <Button asChild variant="default">
            <Link to="/blog">Ver todos los posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col h-full hover:shadow-lg transition-all"
            >
              {post.coverImage && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="ghost" size="sm" className="group">
                  <Link to={`/blog/${post.id}`} className="flex items-center">
                    Leer más
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
