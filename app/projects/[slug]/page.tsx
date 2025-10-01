import ReactMarkdown from 'react-markdown';
import { supabase } from '../../../lib/supabase';

// Define the type for a single project based on your database schema
interface Project {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    full_explanation: string;
    prototype_video_url?: string; // Optional property
    // Add any other fields you have in your 'projects' table
}

// Helper component for embedding videos (now with TypeScript props)
const VideoPlayer = ({ url }: { url: string }) => {
    const isVideoFile = /\.(mp4|webm|ogg)$/i.test(url);
    
    if (isVideoFile) {
        return (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video 
                    src={url}
                    controls
                    className="absolute inset-0 w-full h-full object-contain bg-slate-800 rounded-lg border-2 border-slate-700"
                    poster="/video-placeholder.jpg"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    // Handle embedded videos (YouTube/Vimeo)
    let embedUrl = '';
    try {
        const videoUrl = new URL(url);
        if (videoUrl.hostname.includes('youtube.com') || videoUrl.hostname.includes('youtu.be')) {
            const videoId = videoUrl.searchParams.get('v') || videoUrl.pathname.split('/').pop();
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (videoUrl.hostname.includes('vimeo.com')) {
            const videoId = videoUrl.pathname.split('/').pop();
            embedUrl = `https://player.vimeo.com/video/${videoId}`;
        }
    } catch (error) {
        console.error("Invalid video URL:", url);
        return <p className="text-orange-400">Invalid video URL provided.</p>;
    }

    if (!embedUrl) {
        return <p className="text-orange-400">This video platform is not supported.</p>;
    }

    return (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
                src={embedUrl}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg border-2 border-slate-700"
            ></iframe>
        </div>
    );
};

// This is now an async Server Component
export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    
    const { data: project, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', params.slug)
        .single<Project>(); // Use the <Project> type here

    if (error || !project) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center text-center px-4">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-xl text-slate-400 mb-8">The project you're looking for doesn't seem to exist.</p>
                    <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                        ← Back to Homepage
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-12 lg:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Back to Home Link */}
                    <a href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to All Projects
                    </a>

                    {/* Project Title */}
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        {project.title}
                    </h1>

                    {/* Short Description */}
                    <p className="text-xl text-slate-400 mb-12 whitespace-pre-wrap">
                        {project.short_description}
                    </p>

                    {/* Video Player */}
                    {project.prototype_video_url && (
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Project Demo</h2>
                            <VideoPlayer url={project.prototype_video_url} />
                        </div>
                    )}

                    {/* Full Explanation with Markdown */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-4">Detailed Explanation</h2>
                        <ReactMarkdown>
                            {project.full_explanation || "No detailed explanation provided."}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

