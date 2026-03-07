
import Header from '@/components/general/Header'
import ResourceCategory from '@/components/resources/ResourceCategory'

const ResourceDetailsPage = () => {
    return (
        <div>
            <div className="w-full mx-auto px-6 md:px-12 lg:px-20 bg-blue-950 dark:bg-black">
                <Header />
            </div>
            <ResourceCategory />
        </div>
    )
}

export default ResourceDetailsPage