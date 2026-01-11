export default function CardComponent() {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop" 
                    alt="Product" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            
            {/* Content */}
            <div className="p-4">
                <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                            Product Title
                        </h3>
                        <p className="text-sm text-gray-500">
                            Product subtitle or description
                        </p>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                        <p className="text-2xl font-bold text-gray-900">
                            $99.99
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}