import pandas as pd

def process_dates(df):
    df["date"] = pd.to_datetime(df["date"])
    df["month"] = df["date"].dt.to_period("M")
    df["year"] = df["date"].dt.year
    return df
