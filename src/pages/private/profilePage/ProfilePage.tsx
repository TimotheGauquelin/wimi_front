import Input from "@/components/form/Input/Input";
import PictureProfile from "@/components/profile/PictureProfile/PictureProfile";
import { useAuth } from "@/stores/authStore";
import { UserWithPassword } from "@/types/auth.types";
import { useState, useEffect } from "react";

const ProfilePage: React.FC = () => {

    const { user } = useAuth();

    const [userData, setUserData] = useState<UserWithPassword | null>(null);

    const handleInputChange = (key: keyof UserWithPassword) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (userData) {
            setUserData({
                ...userData,
                [key]: e.target.value
            });
        }
    };

    useEffect(() => {
        if (user) {
            setUserData(user as UserWithPassword);
        }
    }, [user]);

    if (!user) {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Profile Page</h2>
                <div className="text-red-600">Please log in to view your profile</div>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Profile Page</h2>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Profile Page</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="avatar" className="text-base font-bold">Picture</label>
                <PictureProfile
                    src={user.avatar}
                    alt="Avatar"
                    id="avatar"
                    width={80}
                    height={80}
                    borderWidth={4}
                />
            </div>
            <div className="flex gap-4">
                <Input
                    label="Firstname"
                    type="text"
                    placeholder="Jane"
                    value={userData.firstName}
                    onChange={handleInputChange('firstName')}
                    required={true}
                    disabled={true}
                />
                <Input
                    label="Lastname"
                    type="text"
                    placeholder="Doe"
                    value={userData.lastName}
                    onChange={handleInputChange('lastName')}
                    required={true}
                    disabled={true}
                />
            </div>
            <div className="flex gap-4">
                <Input
                    label="Email"
                    type="email"
                    placeholder="jane.doe@gmail.com"
                    value={userData.email}
                    onChange={handleInputChange('email')}
                    required={true}
                    disabled={true}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-base font-bold">Role</span>
                <span className="w-fit text-base font-bold text-true-blue bg-light-blue rounded-md px-2 py-1">{user.role}</span>
            </div>
        </div>
    );
};

export default ProfilePage