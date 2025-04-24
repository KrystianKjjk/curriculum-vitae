import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
    skill: string;
    rating: number;
    index: number;
}

const StarRating: React.FC<StarRatingProps> = ({ skill, rating }) => {
    return (
        <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-gray-700">{skill}</span>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={16}
                            className={star <= rating ? "fill-red-600 text-red-600" : "text-gray-300"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StarRating;
