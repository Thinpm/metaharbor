"use client"

import { useParams } from "next/navigation";

const NFT = () => {
    const { nftId } = useParams();
    return [
        <div>
            <h1>NFT</h1>
            <p>{nftId}</p>
        </div>
    ]
}

export default NFT;
