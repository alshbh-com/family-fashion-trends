export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      activity_logs_rows: {
        Row: {
          action: string | null
          created_at: string | null
          details: string | null
          id: string | null
          section: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string | null
          details?: string | null
          id?: string | null
          section?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string | null
          details?: string | null
          id?: string | null
          section?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      admin_user_permissions_rows: {
        Row: {
          created_at: string | null
          id: string | null
          permission: string | null
          permission_type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          permission?: string | null
          permission_type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          permission?: string | null
          permission_type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      admin_users_rows: {
        Row: {
          created_at: string | null
          id: string | null
          is_active: boolean | null
          password: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          is_active?: boolean | null
          password?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          is_active?: boolean | null
          password?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      agent_payments_rows: {
        Row: {
          amount: number | null
          created_at: string | null
          delivery_agent_id: string | null
          id: string | null
          notes: string | null
          order_id: string | null
          payment_date: string | null
          payment_type: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          delivery_agent_id?: string | null
          id?: string | null
          notes?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_type?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          delivery_agent_id?: string | null
          id?: string | null
          notes?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_type?: string | null
        }
        Relationships: []
      }
      analytics_events_rows: {
        Row: {
          created_at: string | null
          event_type: string | null
          id: string | null
          metadata: Json | null
          product_id: string | null
          session_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_type?: string | null
          id?: string | null
          metadata?: Json | null
          product_id?: string | null
          session_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string | null
          id?: string | null
          metadata?: Json | null
          product_id?: string | null
          session_id?: string | null
        }
        Relationships: []
      }
      app_settings_rows: {
        Row: {
          active_template: string | null
          active_theme: string | null
          custom_settings: Json | null
          id: string | null
          invoice_name: string | null
          platform_name: string | null
          theme_mode: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          active_template?: string | null
          active_theme?: string | null
          custom_settings?: Json | null
          id?: string | null
          invoice_name?: string | null
          platform_name?: string | null
          theme_mode?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          active_template?: string | null
          active_theme?: string | null
          custom_settings?: Json | null
          id?: string | null
          invoice_name?: string | null
          platform_name?: string | null
          theme_mode?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      banners_rows: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          id: string | null
          image_url: string | null
          is_active: boolean | null
          link_url: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string | null
          image_url?: string | null
          is_active?: boolean | null
          link_url?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string | null
          image_url?: string | null
          is_active?: boolean | null
          link_url?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      cashbox_rows: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string | null
          is_active: boolean | null
          name: string | null
          opening_balance: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string | null
          is_active?: boolean | null
          name?: string | null
          opening_balance?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string | null
          is_active?: boolean | null
          name?: string | null
          opening_balance?: number | null
        }
        Relationships: []
      }
      customers_rows: {
        Row: {
          address: string | null
          created_at: string | null
          governorate: string | null
          id: string | null
          name: string | null
          phone: string | null
          phone2: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          governorate?: string | null
          id?: string | null
          name?: string | null
          phone?: string | null
          phone2?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          governorate?: string | null
          id?: string | null
          name?: string | null
          phone?: string | null
          phone2?: string | null
        }
        Relationships: []
      }
      delivery_agents_rows: {
        Row: {
          created_at: string | null
          id: string | null
          name: string | null
          phone: string | null
          serial_number: string | null
          total_owed: number | null
          total_paid: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          name?: string | null
          phone?: string | null
          serial_number?: string | null
          total_owed?: number | null
          total_paid?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          name?: string | null
          phone?: string | null
          serial_number?: string | null
          total_owed?: number | null
          total_paid?: number | null
        }
        Relationships: []
      }
      governorates_rows: {
        Row: {
          created_at: string | null
          id: string | null
          name: string | null
          shipping_cost: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          name?: string | null
          shipping_cost?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          name?: string | null
          shipping_cost?: number | null
        }
        Relationships: []
      }
      offices_rows: {
        Row: {
          created_at: string | null
          id: string | null
          is_active: boolean | null
          logo_url: string | null
          name: string | null
          watermark_name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          is_active?: boolean | null
          logo_url?: string | null
          name?: string | null
          watermark_name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          is_active?: boolean | null
          logo_url?: string | null
          name?: string | null
          watermark_name?: string | null
        }
        Relationships: []
      }
      order_items_rows: {
        Row: {
          color: string | null
          created_at: string | null
          id: string | null
          order_id: string | null
          price: number | null
          product_details: string | null
          product_id: string | null
          quantity: number | null
          size: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string | null
          order_id?: string | null
          price?: number | null
          product_details?: string | null
          product_id?: string | null
          quantity?: number | null
          size?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string | null
          order_id?: string | null
          price?: number | null
          product_details?: string | null
          product_id?: string | null
          quantity?: number | null
          size?: string | null
        }
        Relationships: []
      }
      order_status_history_rows: {
        Row: {
          changed_by: string | null
          changed_by_username: string | null
          created_at: string | null
          id: string | null
          new_status: string | null
          notes: string | null
          old_status: string | null
          order_id: string | null
          source: string | null
        }
        Insert: {
          changed_by?: string | null
          changed_by_username?: string | null
          created_at?: string | null
          id?: string | null
          new_status?: string | null
          notes?: string | null
          old_status?: string | null
          order_id?: string | null
          source?: string | null
        }
        Update: {
          changed_by?: string | null
          changed_by_username?: string | null
          created_at?: string | null
          id?: string | null
          new_status?: string | null
          notes?: string | null
          old_status?: string | null
          order_id?: string | null
          source?: string | null
        }
        Relationships: []
      }
      orders_rows: {
        Row: {
          agent_shipping_cost: number | null
          assigned_at: string | null
          barcode_value: string | null
          created_at: string | null
          customer_id: string | null
          delivery_agent_id: string | null
          discount: number | null
          governorate_id: string | null
          id: string | null
          modified_amount: string | null
          notes: string | null
          order_details: string | null
          order_number: number | null
          qr_value: string | null
          shipping_cost: number | null
          status: string | null
          total_amount: number | null
          tracking_code: string | null
          updated_at: string | null
        }
        Insert: {
          agent_shipping_cost?: number | null
          assigned_at?: string | null
          barcode_value?: string | null
          created_at?: string | null
          customer_id?: string | null
          delivery_agent_id?: string | null
          discount?: number | null
          governorate_id?: string | null
          id?: string | null
          modified_amount?: string | null
          notes?: string | null
          order_details?: string | null
          order_number?: number | null
          qr_value?: string | null
          shipping_cost?: number | null
          status?: string | null
          total_amount?: number | null
          tracking_code?: string | null
          updated_at?: string | null
        }
        Update: {
          agent_shipping_cost?: number | null
          assigned_at?: string | null
          barcode_value?: string | null
          created_at?: string | null
          customer_id?: string | null
          delivery_agent_id?: string | null
          discount?: number | null
          governorate_id?: string | null
          id?: string | null
          modified_amount?: string | null
          notes?: string | null
          order_details?: string | null
          order_number?: number | null
          qr_value?: string | null
          shipping_cost?: number | null
          status?: string | null
          total_amount?: number | null
          tracking_code?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      product_images_rows: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: string | null
          image_url: string | null
          product_id: string | null
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: string | null
          image_url?: string | null
          product_id?: string | null
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: string | null
          image_url?: string | null
          product_id?: string | null
        }
        Relationships: []
      }
      products_rows: {
        Row: {
          category_id: string | null
          color_options: Json | null
          created_at: string | null
          description: string | null
          description_ar: string | null
          description_en: string | null
          details: string | null
          discount_price: string | null
          id: string | null
          image_url: string | null
          is_featured: boolean | null
          is_offer: boolean | null
          low_stock_threshold: number | null
          name: string | null
          name_ar: string | null
          name_en: string | null
          offer_price: number | null
          price: number | null
          quantity_pricing: Json | null
          rating: number | null
          reviews_count: number | null
          size_options: Json | null
          size_pricing: Json | null
          stock: number | null
          stock_quantity: number | null
          updated_at: string | null
        }
        Insert: {
          category_id?: string | null
          color_options?: Json | null
          created_at?: string | null
          description?: string | null
          description_ar?: string | null
          description_en?: string | null
          details?: string | null
          discount_price?: string | null
          id?: string | null
          image_url?: string | null
          is_featured?: boolean | null
          is_offer?: boolean | null
          low_stock_threshold?: number | null
          name?: string | null
          name_ar?: string | null
          name_en?: string | null
          offer_price?: number | null
          price?: number | null
          quantity_pricing?: Json | null
          rating?: number | null
          reviews_count?: number | null
          size_options?: Json | null
          size_pricing?: Json | null
          stock?: number | null
          stock_quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          category_id?: string | null
          color_options?: Json | null
          created_at?: string | null
          description?: string | null
          description_ar?: string | null
          description_en?: string | null
          details?: string | null
          discount_price?: string | null
          id?: string | null
          image_url?: string | null
          is_featured?: boolean | null
          is_offer?: boolean | null
          low_stock_threshold?: number | null
          name?: string | null
          name_ar?: string | null
          name_en?: string | null
          offer_price?: number | null
          price?: number | null
          quantity_pricing?: Json | null
          rating?: number | null
          reviews_count?: number | null
          size_options?: Json | null
          size_pricing?: Json | null
          stock?: number | null
          stock_quantity?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      scan_logs_rows: {
        Row: {
          action: string | null
          created_at: string | null
          details: Json | null
          id: string | null
          new_value: string | null
          old_value: string | null
          order_id: string | null
          session_id: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string | null
          new_value?: string | null
          old_value?: string | null
          order_id?: string | null
          session_id?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string | null
          new_value?: string | null
          old_value?: string | null
          order_id?: string | null
          session_id?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      scan_session_items_rows: {
        Row: {
          "'09d815a9-5ea3-4938-a8f7-c8d42b4d884d'": string | null
          "'17c4c242-b9a3-458a-9ebd-214a44c6ae10'": string | null
          "'2026-05-15 02:51:05.111927+00');": string | null
          "'2026-05-15 02:51:37.141895+00')": string | null
          "'2026-05-15 02:51:50.532408+00')": string | null
          "'2026-05-15 02:52:03.104188+00')": string | null
          "'2a7e630e-8a9b-4b47-93de-8541f6f2c805'": string | null
          "'346f47b1-78db-441e-8afb-24e3a28bfb8c'": string | null
          "'aabf5c8e-8a52-4d15-8398-da5ba105d589'": string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'": string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'_1": string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'_2": string | null
          '"order_id"': string | null
          "\"scanned_at\") VALUES ('42c4ca55-01d8-47f9-8a8a-c02c0dce1ff6'":
            | string
            | null
          '"session_id"': string | null
          "('a9cc8d56-d59a-46af-9c3c-49062ae70400'": string | null
          "('db886b81-60ab-460e-8427-bff55a18babf'": string | null
          "('f7f21969-e598-4f90-b387-ab5dc97cfbb9'": string | null
          'INSERT INTO "public"."scan_session_items" ("id"': string | null
        }
        Insert: {
          "'09d815a9-5ea3-4938-a8f7-c8d42b4d884d'"?: string | null
          "'17c4c242-b9a3-458a-9ebd-214a44c6ae10'"?: string | null
          "'2026-05-15 02:51:05.111927+00');"?: string | null
          "'2026-05-15 02:51:37.141895+00')"?: string | null
          "'2026-05-15 02:51:50.532408+00')"?: string | null
          "'2026-05-15 02:52:03.104188+00')"?: string | null
          "'2a7e630e-8a9b-4b47-93de-8541f6f2c805'"?: string | null
          "'346f47b1-78db-441e-8afb-24e3a28bfb8c'"?: string | null
          "'aabf5c8e-8a52-4d15-8398-da5ba105d589'"?: string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'"?: string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'_1"?: string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'_2"?: string | null
          '"order_id"'?: string | null
          "\"scanned_at\") VALUES ('42c4ca55-01d8-47f9-8a8a-c02c0dce1ff6'"?:
            | string
            | null
          '"session_id"'?: string | null
          "('a9cc8d56-d59a-46af-9c3c-49062ae70400'"?: string | null
          "('db886b81-60ab-460e-8427-bff55a18babf'"?: string | null
          "('f7f21969-e598-4f90-b387-ab5dc97cfbb9'"?: string | null
          'INSERT INTO "public"."scan_session_items" ("id"'?: string | null
        }
        Update: {
          "'09d815a9-5ea3-4938-a8f7-c8d42b4d884d'"?: string | null
          "'17c4c242-b9a3-458a-9ebd-214a44c6ae10'"?: string | null
          "'2026-05-15 02:51:05.111927+00');"?: string | null
          "'2026-05-15 02:51:37.141895+00')"?: string | null
          "'2026-05-15 02:51:50.532408+00')"?: string | null
          "'2026-05-15 02:52:03.104188+00')"?: string | null
          "'2a7e630e-8a9b-4b47-93de-8541f6f2c805'"?: string | null
          "'346f47b1-78db-441e-8afb-24e3a28bfb8c'"?: string | null
          "'aabf5c8e-8a52-4d15-8398-da5ba105d589'"?: string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'"?: string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'_1"?: string | null
          "'b231543b-ec10-460e-8a0e-8c6b3ea9e312'_2"?: string | null
          '"order_id"'?: string | null
          "\"scanned_at\") VALUES ('42c4ca55-01d8-47f9-8a8a-c02c0dce1ff6'"?:
            | string
            | null
          '"session_id"'?: string | null
          "('a9cc8d56-d59a-46af-9c3c-49062ae70400'"?: string | null
          "('db886b81-60ab-460e-8427-bff55a18babf'"?: string | null
          "('f7f21969-e598-4f90-b387-ab5dc97cfbb9'"?: string | null
          'INSERT INTO "public"."scan_session_items" ("id"'?: string | null
        }
        Relationships: []
      }
      scan_sessions_rows: {
        Row: {
          created_at: string | null
          ended_at: string | null
          id: string | null
          notes: string | null
          started_at: string | null
          status: string | null
          total_scanned: number | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          ended_at?: string | null
          id?: string | null
          notes?: string | null
          started_at?: string | null
          status?: string | null
          total_scanned?: number | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          ended_at?: string | null
          id?: string | null
          notes?: string | null
          started_at?: string | null
          status?: string | null
          total_scanned?: number | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      statistics_rows: {
        Row: {
          id: string | null
          last_reset: string | null
          total_orders: number | null
          total_sales: number | null
          updated_at: string | null
        }
        Insert: {
          id?: string | null
          last_reset?: string | null
          total_orders?: number | null
          total_sales?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: string | null
          last_reset?: string | null
          total_orders?: number | null
          total_sales?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      system_passwords_rows: {
        Row: {
          created_at: string | null
          description: string | null
          id: string | null
          password: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string | null
          password?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string | null
          password?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
