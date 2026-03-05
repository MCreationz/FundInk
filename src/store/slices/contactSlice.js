import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../utils/services";
import toast from "react-hot-toast";

export const handleContact = createAsyncThunk(
  "contact/handleContact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await ApiService.post("/contact-us", data);
      if (response?.res) {
        toast.success(response?.msg || "Inquiry submitted successfully.");
      }
      return response;
    } catch (error) {
      toast.error(error.response?.data?.msg);
      return rejectWithValue(error.response?.data);
    }
  },
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(handleContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleContact.fulfilled, (state, _action) => {
        state.loading = false;
      })
      .addCase(handleContact.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export const contactActions = contactSlice.actions;
const contactReducer = contactSlice.reducer;
export default contactReducer;
