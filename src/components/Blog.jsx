import { posts } from "../data/posts";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section className="section" id="blog">
      <h2 className="section__title">Blog</h2>
      <p className="section__subtitle">
        Reflections on what I’m learning and building.
      </p>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.id} className={styles.card}>
            <p className={styles.date}>{post.date}</p>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.summary}>{post.summary}</p>

            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>

            <a className="link" href={post.link}>
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
