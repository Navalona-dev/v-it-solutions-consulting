import ProjectData from "@/app/data/projectData";

const Blog = () => {
    return(
        <div className="blog" id="blog">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Nos projets</p>
                        <h2>Les dernières nouvelles de notre projet</h2>
                    </div>
                    <ProjectData />
                </div>
            </div>
    );
}

export default Blog;