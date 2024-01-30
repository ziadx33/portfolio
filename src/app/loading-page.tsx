import { Progress } from "@/components/ui/progress";

type LoadingPageInterface = { loadings: { name: string; status: boolean }[] };

export default function LoadingPage({ loadings }: LoadingPageInterface) {
    const totalTasks = loadings.length;

    const overallProgress =
        totalTasks > 0
            ? (loadings.filter((loading) => loading.status).length / totalTasks) * 100
            : 0;

            const rest = 100 - overallProgress

    return (
        <div className="w-full h-full fixed bg-white z-50">
            <h1>Loading...</h1>
            <Progress className="w-full h-2" value={rest} />
            <p>Overall Progress: {rest}%</p>
        </div>
    );
}

