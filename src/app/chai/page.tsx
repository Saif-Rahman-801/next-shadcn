import { Button } from "@/components/ui/button";

const page = () => {
    return (
        <main className="h-full flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <h2>Hello from chai 34</h2>
                <button className="px-4 py-3 bg-blue-400 rounded hover:bg-blue-700">
                    Test button
                </button>
                <Button variant={`outline`}>Shadcn Ui button</Button>
            </div>
        </main>
    );
};

export default page;