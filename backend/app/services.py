import pandas as pd
from .utils import process_dates

df_global = None

def load_csv(filepath):
    global df_global
    df = pd.read_csv(filepath)
    df = process_dates(df)
    df_global = df
    return True

def get_monthly_sales():
    global df_global
    if df_global is None:
        return None

    monthly = df_global.groupby("month")["sales"].sum().reset_index()
    monthly["month"] = monthly["month"].astype(str)
    return monthly.to_dict(orient="records")

def get_yearly_sales():
    global df_global
    if df_global is None:
        return None

    yearly = df_global.groupby("year")["sales"].sum().reset_index()
    return yearly.to_dict(orient="records")
