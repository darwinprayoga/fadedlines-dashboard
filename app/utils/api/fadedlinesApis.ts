import { LoginRequest } from '@/interfaces/userInterface';
import { apiFadadlines } from './apiClients';
import { AxiosResponse } from 'axios';


export const login = async (payload: LoginRequest): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await apiFadadlines.post('/auth/login', payload);

    return response.data;
  } catch (error) {
    console.error('Error fetching user list:', error);
    throw error;
  }
};

export const getUserList = async (): Promise<any> => {
  const token = localStorage.getItem("token");

  try {
    const response: AxiosResponse<any> = await apiFadadlines.get('/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user list:', error);
    throw error;
  }
};

export const getRoleList = async (): Promise<any> => {
  const token = localStorage.getItem("token");

  try {
    const response: AxiosResponse<any> = await apiFadadlines.get('/roles/list', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user list:', error);
    throw error;
  }
};

export const getBarberList = async (): Promise<any> => {
  const token = localStorage.getItem("token");

  try {
    const response: AxiosResponse<any> = await apiFadadlines.get('/squareup/barbers/list', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user list:', error);
    throw error;
  }
};

export const getBookingList = async (barberId: string, startFrom: string, endAt: string, channel: string): Promise<any> => {
  const token = localStorage.getItem("token");

  try {
    const response: AxiosResponse<any> = await apiFadadlines.get(`/squareup/bookings?barber_id=${barberId}&start_from=${startFrom}&end_at=${endAt}&channel=${channel}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const getBarberDetail = async (barberId: string): Promise<any> => {
  const token = localStorage.getItem("token");

  try {
    const response: AxiosResponse<any> = await apiFadadlines.get(`/squareup/barber/detail?barber_id=${barberId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const getCustomerDetail = async (customerId: string): Promise<any> => {
  const token = localStorage.getItem("token");

  try {
    const response: AxiosResponse<any> = await apiFadadlines.get(`/squareup/customer/detail?customer_id=${customerId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};



