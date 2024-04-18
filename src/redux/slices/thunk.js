import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../api/fetchApi";

export const getAllAdverts = createAsyncThunk("adverts/fetchAll", getAll);
