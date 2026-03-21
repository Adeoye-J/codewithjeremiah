import { GraduationCap, Pickaxe, SmilePlus } from "lucide-react"

const Value = () => {
    return (
        <section className="bg-surface-low py-12 md:py-20">
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg text-tertiary">
                        <SmilePlus />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Beginner-friendly</h3>
                        <p className="leading-relaxed">Step-by-step guidance without the fluff. We start from ground zero.</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg text-secondary">
                        <Pickaxe />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Real-world projects</h3>
                        <p className="leading-relaxed">Code that actually solves business problems and scales with your needs.</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg text-tertiary">
                        <GraduationCap />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Practical learning</h3>
                        <p className="leading-relaxed">No rote memorization, just core concepts applied in real scenarios.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Value