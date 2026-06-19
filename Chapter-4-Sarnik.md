# 📘 Chapter 4 : सारणिक (Determinants)
### Class 12 Maths — Complete One-Shot Revision Notes

---

> **याद रखो:** Matrix = Data का Box (सजावट), Determinant = उस Box की एक Fixed संख्यात्मक Value।
> सारणिक हमेशा **वर्ग आव्यूह (Square Matrix)** का ही निकलता है — आयताकार का नहीं!

---

## 1. 📌 सारणिक क्या होता है? (What is a Determinant?)

हर **वर्ग आव्यूह (Square Matrix)** के साथ एक संख्या जुड़ी होती है, जिसे उसका **सारणिक (Determinant)** कहते हैं।

इसे $|A|$, $\det(A)$ या $\Delta$ से लिखते हैं।

---

## 2. 🔢 सारणिक का मान निकालना (Expansion)

### 2×2 सारणिक

$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = (a \times d) - (b \times c) = ad - bc$$

> **तरीका:** तिरछा गुणा करो और घटा दो (Cross Multiply करो)

**उदाहरण:**

$$\begin{vmatrix} 2 & 4 \\ -1 & 2 \end{vmatrix} = (2 \times 2) - (4 \times -1) = 4 - (-4) = 4 + 4 = 8$$

> ⚠️ **Common Mistake:** बीच का माइनस $(-)$ भूलना। $ad$ के बाद हमेशा माइनस लगता है, चाहे अगली संख्या कुछ भी हो।

---

### 3×3 सारणिक

$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)$$

**Sign Pattern (याद कर लो!):**

$$\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$$

> 💡 **Pro Tip:** हमेशा उस Row या Column से expand करो जिसमें **सबसे ज़्यादा शून्य (0)** हों — इससे Calculation आधी हो जाती है!

**उदाहरण:**

$$\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix} = 1(45-48) - 2(36-42) + 3(32-35) = -3 + 12 - 9 = 0$$

---

## 3. 🔑 उपसारणिक और सहखंड (Minor and Cofactor)

### उपसारणिक (Minor — $M_{ij}$)
जिस अवयव का Minor चाहिए, उसकी **पंक्ति और स्तंभ को छुपा दो (Hide करो)** — जो बचेगा वही Minor है।

**उदाहरण:** नीचे दी गई Matrix में $a_{22} = 5$ का Minor:

$$\begin{vmatrix} 1 & 2 & 3 \\ 4 & \mathbf{5} & 6 \\ 7 & 8 & 9 \end{vmatrix} \xrightarrow{\text{Row 2, Col 2 हटाओ}} M_{22} = \begin{vmatrix} 1 & 3 \\ 7 & 9 \end{vmatrix} = 9 - 21 = -12$$

---

### सहखंड (Cofactor — $A_{ij}$)

$$A_{ij} = (-1)^{i+j} \cdot M_{ij}$$

- अगर $(i+j)$ **सम (Even)** है → Sign **+** (Minor वही रहेगा)
- अगर $(i+j)$ **विषम (Odd)** है → Sign **−** (Minor का sign बदलेगा)

> 🌟 **गोल्डन नियम:**
> - किसी Row के अवयवों को **उसी Row** के Cofactors से गुणा करो → उत्तर = **$|A|$** (सारणिक)
> - किसी Row के अवयवों को **दूसरी Row** के Cofactors से गुणा करो → उत्तर = **$0$** (हमेशा!)

---

## 4. 🔄 सारणिक के गुणधर्म (Properties of Determinants)

ये गुणधर्म Calculation छोटी करने के **सबसे बड़े हथियार** हैं!

| # | गुणधर्म | सरल भाषा में |
|---|---------|-------------|
| **1** | $\|A\| = \|A^T\|$ | Transpose करने से सारणिक नहीं बदलता |
| **2** | दो Rows/Columns बदलने पर | Sign बदल जाता है (+ था तो − हो जाएगा) |
| **3** | दो Rows/Columns **समान या समानुपाती** हों | सारणिक = **0** |
| **4** | किसी Row के सभी अवयवों को $k$ से गुणा करो | सारणिक भी $k$ गुना हो जाएगा |
| **5** | $n \times n$ Matrix को $k$ से गुणा करो | $\|kA\| = k^n\|A\|$ |
| **6** | $R_i \to R_i + k \cdot R_j$ (एक Row में दूसरी Row का गुणज जोड़ो) | सारणिक **नहीं बदलता** (सबसे ज़्यादा उपयोगी!) |

**उदाहरण (Property 3):**

$$\begin{vmatrix} 2 & 3 & 4 \\ 2 & 3 & 4 \\ 1 & 5 & 9 \end{vmatrix} = 0 \quad (\text{क्योंकि } R_1 = R_2)$$

$$\begin{vmatrix} 1 & 2 \\ 2 & 4 \end{vmatrix} = 0 \quad (\text{क्योंकि } R_2 = 2 \times R_1 \text{, यानी Proportional})$$

> ⚠️ **Common Mistake (Matrix vs Determinant में $k$):**
> - **Matrix** में $k$ से गुणा → **हर element** से गुणा होता है
> - **Determinant** में $k$ → केवल **एक Row या एक Column** से बाहर आता है
> - इसीलिए: $|kA| = k^n |A|$ — यह MCQ में हर साल आता है!

---

## 5. 📐 त्रिभुज का क्षेत्रफल (Area of Triangle)

तीन बिंदु $(x_1, y_1),\ (x_2, y_2),\ (x_3, y_3)$ हों तो:

$$\text{Area} = \frac{1}{2} \left| \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} \right|$$

> ⚠️ **ज़रूरी बात:**
> - Area हमेशा **धनात्मक (+)** होता है → अगर Determinant minus में आए तो Modulus (||) लेना
> - अगर Area = **0** → तीनों बिंदु **सरेख (Collinear)** हैं (एक ही रेखा पर)
> - अगर सवाल में Area पहले से दिया हो और कोई Unknown ($k$) निकालनी हो → **$\pm$ दोनों Cases** solve करो → **दो values** मिलेंगी

---

## 6. 🔲 सहखंडज (Adjoint) और व्युत्क्रम (Inverse)

### सहखंडज निकालने के Steps:

1. Matrix के हर अवयव का **Cofactor** निकालो
2. सभी Cofactors की एक Matrix बनाओ
3. उस Matrix का **Transpose** ले लो → यही **$\text{adj}(A)$** है

> 🚀 **2×2 शॉर्टकट:**
> $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ का $\text{adj}(A) = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$
> (मुख्य विकर्ण बदलो + बाकी दोनों के Sign बदलो)

---

### व्युत्क्रम (Inverse):

$$A^{-1} = \frac{1}{|A|} \cdot \text{adj}(A)$$

> **शर्त:** $|A| \neq 0$ होना चाहिए (अन्यथा Inverse मौजूद नहीं)

**उदाहरण:**

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad |A| = 4-6 = -2$$

$$\text{adj}(A) = \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}, \quad A^{-1} = \frac{1}{-2}\begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix} = \begin{bmatrix} -2 & 1 \\ 3/2 & -1/2 \end{bmatrix}$$

---

### Singular और Non-Singular Matrix:

| प्रकार | शर्त | क्या होगा? |
|--------|------|-----------|
| **Singular Matrix** | $\|A\| = 0$ | Inverse **नहीं** निकलेगा |
| **Non-Singular Matrix** | $\|A\| \neq 0$ | Inverse **निकलेगा** |

---

## 7. 📝 रैखिक समीकरण-निकाय (System of Linear Equations)

यह Chapter का **5–6 नंबर वाला सबसे बड़ा सवाल** है।

$$a_1x + b_1y + c_1z = d_1$$
$$a_2x + b_2y + c_2z = d_2$$
$$a_3x + b_3y + c_3z = d_3$$

इसे Matrix रूप में लिखो: $AX = B$

जहाँ:
- $A$ = Coefficients की Matrix
- $X = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$ = Unknown variables
- $B = \begin{bmatrix} d_1 \\ d_2 \\ d_3 \end{bmatrix}$ = Constants

### हल का सूत्र:

$$X = A^{-1}B$$

### Consistency Table (परीक्षा में Direct आता है!):

| परिस्थिति | System का प्रकार | हल |
|-----------|----------------|-----|
| $\|A\| \neq 0$ | **संगत (Consistent)** | **अनोखा हल (Unique Solution)** |
| $\|A\| = 0$ और $(\text{adj}\,A) \cdot B = 0$ | **संगत (Consistent)** | **अनंत हल (Infinite Solutions)** |
| $\|A\| = 0$ और $(\text{adj}\,A) \cdot B \neq 0$ | **असंगत (Inconsistent)** | **कोई हल नहीं (No Solution)** |

> 💡 **Pro Tip:** $X = A^{-1}B$ निकालने के बाद — मिली हुई $x, y, z$ की values को किसी **एक समीकरण में रखकर check करो**। LHS = RHS आना चाहिए।

---

## 8. ⭐ महत्वपूर्ण प्रमेय (Important Theorems — रट लो!)

| प्रमेय | सूत्र | कहाँ काम आता है |
|-------|-------|----------------|
| **Transpose Property** | $\|A^T\| = \|A\|$ | हर जगह |
| **Product Property** | $\|AB\| = \|A\| \cdot \|B\|$ | MCQ में हर साल |
| **Identity** | $\|I\| = 1$ | Verification में |
| **Inverse Determinant** | $\|A^{-1}\| = \dfrac{1}{\|A\|}$ | MCQ में |
| **Adjoint Determinant** | $\|\text{adj}\,A\| = \|A\|^{n-1}$ | 1 नंबर के लिए सबसे कीमती! |
| **Adjoint Product** | $A \cdot (\text{adj}\,A) = (\text{adj}\,A) \cdot A = \|A\| \cdot I$ | Verification सवालों में |
| **Reversal Law** | $(AB)^{-1} = B^{-1}A^{-1}$ | **उल्टा क्रम** हमेशा याद रखो! |

> 📌 **Note:** $n \times n$ Matrix के लिए $|\text{adj}\,A| = |A|^{n-1}$
> → $3 \times 3$ Matrix के लिए: $|\text{adj}\,A| = |A|^2$

---

## 9. ❌ Common Mistakes (परीक्षा में होने वाली गलतियाँ)

| ❌ गलती | ✅ सही तरीका |
|---------|------------|
| 2×2 में बीच का minus भूल जाना | $ad - bc$ में minus हमेशा लगाओ |
| Sign Pattern $(+,-,+)$ भूलना | $(-1)^{i+j}$ याद रखो या Pattern याद करो |
| Minor और Cofactor को Same समझना | Cofactor = **Sign × Minor** |
| Adjoint में Transpose भूलना | Cofactor Matrix बनाने के बाद **Transpose** लेना ज़रूरी है |
| $|A| = 0$ होने पर भी Inverse निकालना | पहले $|A|$ check करो — $|A|=0$ तो Inverse नहीं निकलेगा |
| Area में Modulus न लेना | क्षेत्रफल हमेशा Positive होता है — $|\cdot|$ ज़रूर लो |
| पूरी Matrix से $k$ common निकालना | Determinant में $k$ सिर्फ **एक Row/Column** से बाहर आता है |
| $|kA|$ में $k$ को एक ही बार लिखना | $|kA| = k^n|A|$ — $n$ = Matrix का Order |

---

## 10. ⚡ 30-Second Final Revision (Exam से पहले!)

- ✅ Determinant → केवल **Square Matrix** का
- ✅ 2×2 → $ad - bc$
- ✅ 3×3 → किसी Row/Column से Expand करो (जहाँ सबसे ज़्यादा 0)
- ✅ Minor = Row + Column हटाकर बचा Determinant
- ✅ Cofactor = $(-1)^{i+j} \times$ Minor
- ✅ Sign Pattern = $\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$
- ✅ Row Exchange → Sign Change
- ✅ Same / Proportional Rows → Determinant = **0**
- ✅ $|AB| = |A||B|$, $\quad |A^T| = |A|$
- ✅ Adjoint = Cofactor Matrix का **Transpose**
- ✅ Inverse = $\dfrac{\text{adj}(A)}{|A|}$, शर्त: $|A| \neq 0$
- ✅ Triangle Area → Determinant Formula, Area = 0 → Collinear
- ✅ $AX = B$ → $X = A^{-1}B$
- ✅ $|\text{adj}\,A| = |A|^{n-1}$, $\quad (AB)^{-1} = B^{-1}A^{-1}$

---

*📖 Class 12 Maths | Chapter 4 — सारणिक (Determinants) | Merged Notes*
