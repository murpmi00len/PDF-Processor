export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string;
          department: 'Tech' | 'Marketing' | 'Finance' | 'HR';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          department: 'Tech' | 'Marketing' | 'Finance' | 'HR';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          department?: 'Tech' | 'Marketing' | 'Finance' | 'HR';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}