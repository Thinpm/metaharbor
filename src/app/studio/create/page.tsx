"use client"
import Headers from "@/components/headers";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import ConnectWalletModal from "@/components/ConnectWallet";
import WalletButton from "@/components/WalletButton";
import { Button } from "@/ui/button";
import { useRouter } from "next/navigation";

export default function create(){
    const router = useRouter();
    const [traits, setTraits] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [creating, setCreating] = useState(false);
    const [nftData, setNftData] = useState({
        name: '',
        description: '',
        supply: 1,
        externalLink: '',
        traits: []
    });
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const [previewUrl, setPreviewUrl] = useState<string>('');

    const toggleTraits = () => {
        setTraits(!traits);
    }

    const handleFileUpload = async (selectedFile: File) => {
        try {
            setUploading(true);
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        } catch (error) {
            console.error('Lỗi khi tải file:', error);
            alert('Có lỗi xảy ra khi tải file lên');
        } finally {
            setUploading(false);
        }
    };

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        
        if (!nftData.name.trim()) {
            newErrors.name = 'Tên NFT là bắt buộc';
        }
        
        if (!file) {
            newErrors.file = 'Vui lòng tải lên file media';
        }
        
        if (nftData.supply < 1) {
            newErrors.supply = 'Supply phải lớn hơn 0';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCreateNFT = async () => {
        try {
            if (!validateForm()) {
                return;
            }
            
            setCreating(true);
            
            // Xử lý tạo NFT ở đây
            console.log("Creating NFT with data:", nftData);
            console.log("File:", file);

            alert('NFT đã được tạo thành công!');
            router.push('/studio');

        } catch (error) {
            console.error('Lỗi khi tạo NFT:', error);
            alert('Có lỗi xảy ra khi tạo NFT');
        } finally {
            setCreating(false);
        }
    };

    return(
        <div className="min-h-screen flex flex-col items-center px-20 pt-10">
            <div className="w-full ">
                <div className="flex items-center mb-4 fixed top-10 left-10 right-10 z-50">
                    <button className="text-2xl p-2 bg-gray-100 rounded-full" onClick={() => router.back()}>
                        <img className="w-4 h-4" src="/assets/svg/left-arrow.svg" alt="left-arrow" />
                    </button>
                    <div className="ml-auto flex items-center space-x-4">
                        <div className="flex items-center gap-4">
                            <WalletButton />
                        </div>
                    </div>
                </div>
                <div className="w-full items-center  pl-0 pr-0 flex flex-col justify-center">
                    <div className="w-full flex flex-col justify-start pl-44">
                        <h1 className="text-3xl font-bold mb-2">Create an NFT</h1>
                        <p className="text-gray-600 mb-6">Once your item is minted you will not be able to change any of its information.</p>
                    </div>
                    <div className="w-3/4  flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                        <div 
                            className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-[550px] w-[550px]" 
                            onDrop={(e) => {
                                e.preventDefault();
                                const droppedFile = e.dataTransfer.files[0];
                                if (droppedFile) {
                                    handleFileUpload(droppedFile);
                                }
                            }} 
                            onDragOver={(e) => e.preventDefault()}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input 
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/jpeg,image/png,image/gif,image/svg+xml,video/mp4"
                                onChange={(e) => {
                                    const selectedFile = e.target.files?.[0];
                                    if (selectedFile) {
                                        handleFileUpload(selectedFile);
                                    }
                                }}
                            />
                            {previewUrl ? (
                                <img 
                                    src={previewUrl} 
                                    alt="Preview" 
                                    className="max-h-full max-w-full object-contain"
                                />
                            ) : (
                                <>
                                    <i className="fas fa-upload text-3xl mb-4"></i>
                                    <p className="text-gray-600 mb-2">Kéo thả file hoặc click để chọn</p>
                                    <p className="text-gray-500 text-sm">Max size: 50MB</p>
                                    <p className="text-gray-500 text-sm">JPG, PNG, GIF, SVG, MP4</p>
                                </>
                            )}
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Collection *</label>
                                <div className="border border-gray-300 bg-gray-100 font-bold rounded-lg flex items-center">
                                    <div className="flex items-center justify-center p-5 mx-4 border border-gray-300 bg-gray-200 rounded-lg">
                                        <img src="/assets/svg/add.svg" alt="add" className="w-5 h-5" />
                                    </div>
                                    <span className=" py-10">Create a new collection</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-1">Not all collections are eligible. <a href="#" className="text-blue-500">Learn more</a></p>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Name *</label>
                                <input 
                                    type="text" 
                                    placeholder="Name your NFT" 
                                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                                    value={nftData.name}
                                    onChange={(e) => setNftData({...nftData, name: e.target.value})}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Supply *</label>
                                <input type="number" placeholder="1" className="w-full border border-gray-300 rounded-lg p-2"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Description</label>
                                <textarea placeholder="Enter a description" className="w-full border border-gray-300 rounded-lg p-2"></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">External Link</label>
                                <input type="text" placeholder="https://collection.io/item/123" className="w-full border border-gray-300 rounded-lg p-2"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Traits</label>
                                <span className=" text-sm">Traits describe attributes of your item. They appear as filters inside your collection page and are also listed out inside your item page.</span>
                                <div className="flex items-center justify-center border border-gray-300 bg-gray-100 font-bold rounded-lg p-2 w-1/3 cursor-pointer" onClick={() => setTraits(!traits)}>
                                    <img src="/assets/svg/add.svg" alt="add" className="w-5 h-5" />
                                    <span>Add trait</span>
                                </div>
                                {traits && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={toggleTraits}>
                                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-xl font-semibold">Add trait</h2>
                                                <button className="text-gray-500 hover:text-gray-700" onClick={toggleTraits}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex space-x-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Ex. Size"
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Ex. Large"
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button className="w-full bg-blue-500 text-white rounded-lg p-2" onClick={handleCreateNFT} disabled={uploading || creating}>
                                {creating ? 'Đang tạo...' : 'Tạo NFT'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}