export interface ConfigItem {
        id: number;
        name: string;
        data: {
            top?: string;
            title?: string;
            url?: string;
            img?: string;
            name?: string;
            Description?: string;
            quoteFooter?: string;
            quote?: string;
            buttonText?: string;
            subtle?: string;
            description?: string;
            iconBlocks?: {
                id: number;
                icon: string;
                title: string;
                description: string;
            }[];
            companyBlocks?: {
                id: number;
                img: string;
                name: string;
            }[];
            galleryBlocks?: {
                id: number;
                img: string;
            }[];
            pricingBlocks?: {
                id: number;
                description: string;
                Title: string;
                subtitle: string;
                currency: string;
                price: number;
                featured: string;
                download: string;
                extension: string;
                tutorial: string;
                support: string;
                update: string;
                buttonText: string;
            }[];
            feedbackBlock?: {
                id: number;
                name: string;
                img: string;
                comments: string;
            }[];
            socialBlock?: {
                id: number;
                icon: string;
                url: string;
                iconName: string;
            }[];
                        
        }
}
