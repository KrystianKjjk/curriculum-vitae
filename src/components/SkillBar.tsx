import React, { useRef } from "react";

interface SkillBarProps {
    skill: string;
    level: number;
    index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
    const barRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={barRef} className="mb-3">
            <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{skill}</span>
                <span className="text-sm text-gray-500">{level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
                <div ref={progressRef} className="h-2 rounded-full bg-red-600" style={{ width: "0%" }}></div>
            </div>
        </div>
    );
};

export default SkillBar;
