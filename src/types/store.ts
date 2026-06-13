import type { Database } from '@/integrations/supabase/types';

export type ProductRow = Database['public']['Tables']['products_rows']['Row'];
export type ProductImageRow = Database['public']['Tables']['product_images_rows']['Row'];
export type BannerRow = Database['public']['Tables']['banners_rows']['Row'];
export type AppSettingsRow = Database['public']['Tables']['app_settings_rows']['Row'];
export type GovernorateRow = Database['public']['Tables']['governorates_rows']['Row'];

export type StoreCategory = {
  id: string;
  name: string;
  image_url: string | null;
};

export type StoreOffer = {
  id: string;
  title_ar: string;
  discount_percentage: number | null;
  end_date: string | null;
};

export type StoreProduct = ProductRow & {
  product_images: ProductImageRow[];
  product_color_variants: Array<{ color: string; sizes: string[] }>;
};