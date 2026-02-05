def create_tables(cursor):
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS reports (
        id INT AUTO_INCREMENT PRIMARY KEY,
        revenue FLOAT,
        expenses FLOAT,
        profit FLOAT
    )
    """)
