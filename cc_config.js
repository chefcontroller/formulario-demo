// cc_config.js — ChefController DEMO
// ⚠️  Ambiente DEMO — NO usar en producción

const CC_CONFIG = {
  supabase: {
    url:     'https://fvlkmxqfqmzbmoofmzcb.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bGtteHFmcW16Ym1vb2ZtemNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjQwMTcsImV4cCI6MjA5Mzc0MDAxN30._zZKCMsREtsIdCbKl86JGaKCcWqHHs3dKRKGjM8cRXg'
  },
  grupos: {
    default: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'
  },
  locales: {
    CDS_REC: { id: '00000000-0000-0000-0000-000000000001', codigo: 'CDS-REC', nombre: 'Café del Sur Recoleta'  },
    CDS_CAB: { id: '00000000-0000-0000-0000-000000000002', codigo: 'CDS-CAB', nombre: 'Café del Sur Caballito' },
    CDS_SIS: { id: '00000000-0000-0000-0000-000000000003', codigo: 'CDS-SIS', nombre: 'Café del Sur San Isidro'},
    TOS_PAL: { id: '00000000-0000-0000-0000-000000000004', codigo: 'TOS-PAL', nombre: 'Tostado Palermo'        },
    KEN_ZNO: { id: '00000000-0000-0000-0000-000000000005', codigo: 'KEN-ZNO', nombre: 'Kentucky Zona Norte'    },
    BAR_PAL: { id: '00000000-0000-0000-0000-000000000006', codigo: 'BAR-PAL', nombre: 'Bar del Centro Palermo' }
  },
  colores: {
    primary: '#2F6FED',
    dark:    '#1E3A8A',
    light:   '#60A5FA',
    bg:      '#F5F6F8'
  }
};
