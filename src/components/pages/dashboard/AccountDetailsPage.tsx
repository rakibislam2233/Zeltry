'use client';
import { Camera, Save } from 'lucide-react';

const AccountDetailsPage = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-text-main dark:text-white">Account Details</h2>
                <p className="text-text-muted text-sm">Update your profile and password</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
                <form className="space-y-8">
                    {/* Profile Photo */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-gray-200 dark:border-gray-800">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-primary overflow-hidden">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button type="button" className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 p-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-text-main dark:text-white shadow-sm hover:text-primary transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="font-bold text-text-main dark:text-white">Profile Photo</h3>
                            <p className="text-sm text-text-muted mt-1">Allowed formats: JPG, PNG. Max size: 2MB.</p>
                            <button type="button" className="mt-3 text-sm font-bold text-primary hover:underline">Change Photo</button>
                        </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main dark:text-white">First Name</label>
                            <input
                                type="text"
                                defaultValue="Alex"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main dark:text-white">Last Name</label>
                            <input
                                type="text"
                                defaultValue="Doe"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main dark:text-white">Email Address</label>
                            <input
                                type="email"
                                defaultValue="alex.doe@example.com"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main dark:text-white">Phone Number</label>
                            <input
                                type="tel"
                                defaultValue="+1 (555) 123-4567"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Password Change */}
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="font-bold text-lg text-text-main dark:text-white mb-6">Change Password</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-main dark:text-white">Current Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main dark:text-white">New Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main dark:text-white">Confirm New Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button type="button" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-all shadow-md shadow-primary/20">
                            <Save className="w-5 h-5" />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccountDetailsPage;
