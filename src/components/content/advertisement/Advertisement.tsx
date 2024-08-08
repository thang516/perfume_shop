import { useEffect, useState } from "react";
import "./advertisement.scss"

interface AdvertisementProps {
    targetDate: string;
}

export const Advertisement: React.FC<AdvertisementProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);


    return <>
        <div className="advertisement-wrapper">
            <div className="advertisement-content">
                <h2><a href="https://morra.com.vn/collections/6-years-of-love">🎂   6 Years Of Love 🎉 </a></h2>
                <p className="subheading"><a href="https://morra.com.vn/collections/6-years-of-love">Set 2 chai nước hoa giảm đến 1.260k</a></p>
            </div>
            <div className="home-cd-wrap">
                <div className="home-cd-loop">
                    <div className="days">
                        <div className="number-home-cd">{String(timeLeft.days).padStart(2, '0')}</div><div className="text-home-cd">Ngày</div>
                    </div>
                    <div className="hours">
                        <div className="number-home-cd">{String(timeLeft.hours).padStart(2, '0')}</div><div className="text-home-cd">Giờ</div>
                    </div>
                    <div className="minutes">
                        <div className="number-home-cd">{String(timeLeft.minutes).padStart(2, '0')}</div><div className="text-home-cd">Phút</div>
                    </div>
                    <div className="seconds">
                        <div className="number-home-cd">{String(timeLeft.seconds).padStart(2, '0')}</div> <div className="text-home-cd">Giây</div>
                    </div>
                </div>
                <div className="view-detail-wrap">
                    <div className="view-detail-advertisement">
                        <a
                            href="https://morra.com.vn/collections/6-years-of-love"
                        >
                            Xem chi tiết tại đây
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}   