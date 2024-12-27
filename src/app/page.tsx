import type { JSX } from 'react';
import Image from "next/image";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import Headers from "@/components/headers";
import Link from "next/link";
import ArticleMain from '@/components/ArticleMain';
export default function Home() {
    return (
        <div className="px-10">
            <Headers />
            <ArticleMain/>
        </div>
    );
};
