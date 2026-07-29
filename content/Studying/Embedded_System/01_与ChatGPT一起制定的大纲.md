# GPT的回答:

## 思考:
思考

正在搜索 users.ece.utexas.edu

检查德州大学 MSPM0 页面

```
bash -lc python - <<'PY'
import requests
for url in ['https://users.ece.utexas.edu/~valvano/mspm0/','https://users.ece.utexas.edu/~valvano/mspm0/index.html']:
    r=requests.get(url,timeout=30)
    print('\nURL',url,r.status_code,r.url)
    print(r.text[:5000])
PY
```

Traceback (most recent call last):
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connection.py", line 204, in _new_conn
    sock = connection.create_connection(
        (self._dns_host, self.port),
    ...<2 lines>...
        socket_options=self.socket_options,
    )
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/util/connection.py", line 60, in create_connection
    for res in socket.getaddrinfo(host, port, family, socket.SOCK_STREAM):
               ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/lib/python3.13/socket.py", line 977, in getaddrinfo
    for res in _socket.getaddrinfo(host, port, family, type, proto, flags):
               ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
socket.gaierror: [Errno -3] Temporary failure in name resolution

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connectionpool.py", line 788, in urlopen
    response = self._make_request(
        conn,
    ...<10 lines>...
        **response_kw,
    )
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connectionpool.py", line 488, in _make_request
    raise new_e
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connectionpool.py", line 464, in _make_request
    self._validate_conn(conn)
    ~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connectionpool.py", line 1106, in _validate_conn
    conn.connect()
    ~~~~~~~~~~~~^^
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connection.py", line 759, in connect
    self.sock = sock = self._new_conn()
                       ~~~~~~~~~~~~~~^^
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connection.py", line 211, in _new_conn
    raise NameResolutionError(self.host, self, e) from e
urllib3.exceptions.NameResolutionError: HTTPSConnection(host='users.ece.utexas.edu', port=443): Failed to resolve 'users.ece.utexas.edu' ([Errno -3] Temporary failure in name resolution)

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/opt/pyvenv/lib/python3.13/site-packages/requests/adapters.py", line 644, in send
    resp = conn.urlopen(
        method=request.method,
    ...<9 lines>...
        chunked=chunked,
    )
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/connectionpool.py", line 842, in urlopen
    retries = retries.increment(
        method, url, error=new_e, _pool=self, _stacktrace=sys.exc_info()[2]
    )
  File "/opt/pyvenv/lib/python3.13/site-packages/urllib3/util/retry.py", line 543, in increment
    raise MaxRetryError(_pool, url, reason) from reason  # type: ignore[arg-type]
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
urllib3.exceptions.MaxRetryError: HTTPSConnectionPool(host='users.ece.utexas.edu', port=443): Max retries exceeded with url: /~valvano/mspm0/ (Caused by NameResolutionError("HTTPSConnection(host='users.ece.utexas.edu', port=443): Failed to resolve 'users.ece.utexas.edu' ([Errno -3] Temporary failure in name resolution)"))

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
  File "/opt/pyvenv/lib/python3.13/site-packages/requests/api.py", line 73, in get
    return request("get", url, params=params, **kwargs)
  File "/opt/pyvenv/lib/python3.13/site-packages/requests/api.py", line 59, in request
    return session.request(method=method, url=url, **kwargs)
           ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/pyvenv/lib/python3.13/site-packages/requests/sessions.py", line 589, in request
    resp = self.send(prep, **send_kwargs)
  File "/opt/pyvenv/lib/python3.13/site-packages/requests/sessions.py", line 703, in send
    r = adapter.send(request, **kwargs)
  File "/opt/pyvenv/lib/python3.13/site-packages/requests/adapters.py", line 677, in send
    raise ConnectionError(e, request=request)
requests.exceptions.ConnectionError: HTTPSConnectionPool(host='users.ece.utexas.edu', port=443): Max retries exceeded with url: /~valvano/mspm0/ (Caused by NameResolutionError("HTTPSConnection(host='users.ece.utexas.edu', port=443): Failed to resolve 'users.ece.utexas.edu' ([Errno -3] Temporary failure in name resolution)"))


Command 'bash -lc 'python - <<'"'"'PY'"'"'
import requests
for url in ['"'"'https://users.ece.utexas.edu/~valvano/mspm0/'"'"','"'"'https://users.ece.utexas.edu/~valvano/mspm0/index.html'"'"']:
    r=requests.get(url,timeout=30)
    print('"'"'\nURL'"'"',url,r.status_code,r.url)
    print(r.text[:5000])
PY'' failed with status 1.

正在搜索 users.ece.utexas.edu

已分析

正在搜索 software-dl.ti.com

正在搜索 users.ece.utexas.edu

规划学习体系

我正在把 Valvano 的 MSPM0 课程、教材、实验、开发板和安装资料整理成一套可长期使用的本地学习体系，下一步会按资源关系逐层建立项目结构。

正在搜索 users.ece.utexas.edu

生成 Valvano 学习系统文件结构

````
bash -lc cat > /tmp/build_valvano_scaffold.py <<'PY'
from pathlib import Path
import csv, json, textwrap, zipfile, os

root = Path('/mnt/data/Valvano_MSPM0_Learning_System')
if root.exists():
    import shutil; shutil.rmtree(root)
root.mkdir(parents=True)

def write(rel, content):
    p = root / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(textwrap.dedent(content).lstrip(), encoding='utf-8')
    return p

write('README.md', r'''
# Valvano MSPM0 嵌入式学习系统

这是一个围绕 UT Austin ECE319K（Spring 2026）与《Introduction to Embedded Systems Using the MSPM0+》建立的长期本地工作区。

它不是网页的无差别镜像，而是四样东西的结合：

1. **课程地图**：知道教材、讲义、实验、考试、参考资料分别承担什么作用。
2. **学习工作区**：每个 Lab 都有自己的代码、笔记、证据和复盘位置。
3. **资源索引与下载器**：可下载公开材料；Google Docs 尝试导出 PDF/DOCX；Box 文件夹需要浏览器或 Codex进一步处理。
4. **Codex 长期协作协议**：后续让 Codex在这个目录里安装、检查、编译、调试和维护学习记录。

## 先做什么

1. 阅读 `00_guide/COURSE_MAP.md`。
2. 阅读 `00_guide/PURCHASE_GUIDE_CN.md`，先只购买“第一批”。
3. 不要急着安装最新版 CCS；先阅读 `00_guide/SETUP_AND_WORKFLOW.md`。
4. 在本机解压后，用 VS Code/Codex 打开**本目录根目录**。
5. 把 `codex/CODEX_BOOTSTRAP_PROMPT.md` 交给 Codex。
6. 让 Codex先运行：

```powershell
python scripts/download_resources.py --dry-run --priority core
````

确认清单后，再运行实际下载。

## 版权与权限

- 不自动下载或再分发纸质教材/付费教材的非授权副本。
    
- 公开电子书页面只保存网页索引；你可以在浏览器中阅读。
    
- Google Docs 只有在公开且允许导出时才能自动下载；否则需要你手动导出后放入指定目录。
    
- UT Canvas、课程内部公告、评分与作业提交内容需要 UT 登录，本项目无法绕过权限。
    

## 本项目的工作原则

- 先理解，再复制；先复现，再修改；最后脱离范例重做。
    
- 不让 Codex替你直接完成整份实验。它应当解释、诊断、提出最小修改、帮助验证。
    
- 所有外部代码必须记录出处，并确保你能解释关键逻辑。
    
- 任何安装、删除、覆盖或大规模重构都先留下日志。  
    ''')
    

write('00_guide/COURSE_MAP.md', r'''

# 课程地图：这些网页到底各自负责什么

## 一、课程的核心闭环

ECE319K 不是“先把书读完，再做题”。它的真实节奏是：

> 教材章节 → 课堂讲义/示例 → Lab 文档 → Starter Project → 实物接线与调试 → Worksheet/Quiz → 旧考试检验

对自学者，建议把每个单元固定成以下七步：

1. 先看本周 `UNIT_GUIDE.md`，只了解目标与产物。
    
2. 阅读对应电子书章节，不追求一次吃透。
    
3. 看当周 lecture slides 与 example code。
    
4. 阅读 Lab 文档，画出软硬件因果链和接线图。
    
5. 复制一个课程提供的已知可运行工程，再修改；不要从空白工程开始。
    
6. 在真板上编译、烧录、测量、记录错误和证据。
    
7. 做 worksheet/旧考题，自证不是“只会照着做”。
    

## 二、资源分层

### A. 每周必须使用

- Spring 2026 Syllabus：课程目标、先修、设备、教学规则。
    
- E-book：九章主教材与电子学/数字逻辑/汇编附录。
    
- Lectures：每周覆盖范围、PPT、课堂示例代码和 worksheet。
    
- Labs：Lab 0/Setup 到 Lab 9 的实验说明。
    
- Spring 2026 Starter Files：已配置好的 CCS 项目和示例。
    
- 数据手册中与当前实验有关的部分。
    

### B. 用来判断“真的会了没有”

- Weekly worksheets：Canvas quiz 不公开时，worksheet 是最接近的替代。
    
- Exam 1 旧题：内存、寄存器、栈、运算、控制结构、函数、数组，C 与汇编并行。
    
- Exam 2 practice systems：在 CCS 与真实板上反复编辑、编译、调试。
    
- Finals：全课程综合；必须先做题，再看答案。
    

### C. 遇到卡点再查

- Podcast：针对指针、内存映射、I/O 寄存器、模块化、硬故障等概念补洞。
    
- Cortex-M0+ / MSPM0G3507 技术参考手册。
    
- C reference card、Arm clang guide。
    
- Factory Reset、BSL unbrick、LaunchPad pin card。
    

### D. 暂时不要混入主线

- PCB Camp / KiCad：先保存，等 Lab 5–9 或第一次独立硬件项目再进入。
    
- RSLK / ECE445L：Volume 2 路线，完成 ECE319K 后再启动。
    
- ECE445M / RTOS：Volume 3 路线。
    
- Honors wireless Lab 8H：普通路线不必购买红外件。
    
- 旧 TM4C123/Keil 课程：仅作比较资料，不另建主线。
    

## 三、九章与九个实验的对应

|学习单元|核心内容|主要 Lab|最终可见成果|
|---|---|---|---|
|Chapter 1|MCU、内存、寄存器、ARM 汇编、AAPCS|Lab 1|在真板上执行和调试汇编程序|
|Chapter 2|GPIO、按键、LED、基本电路、PWM|Lab 2|外部按键控制外部 LED|
|Chapter 3|C、函数、数组、指针、调试|Lab 3|C 程序与调试数据采集|
|Chapter 4|struct、有限状态机、SysTick|Lab 4|交通灯状态机|
|Chapter 5|中断、DAC、声音、模块化|Lab 5|5-bit DAC 数字钢琴|
|Chapter 6|栈、局部变量、SPI、LCD、定点数|Lab 6|ST7735R 显示驱动与数值显示|
|Chapter 7|ADC、采样、校准、实时中断|Lab 7|实时位置/距离监测系统|
|Chapter 8|UART、FIFO、并发 I/O|Lab 8|分布式数据采集/串行通信|
|Chapter 9|系统设计、图形、声音、周期任务|Lab 9|完整掌上游戏系统|

## 四、UT 课堂与自学版本的差异

UT 学生拥有教授、TA、Canvas、现场 checkout、同伴和固定考试。自学版本用以下机制替代：

- `STATUS.md`：当前单元、阻塞和下一步。
    
- 每个 Lab 的 `evidence/`：照片、串口日志、波形/电压记录、演示视频。
    
- 每个 Lab 的 `POSTMORTEM.md`：错误、原因、修复和可迁移结论。
    
- Codex：作为工程助理和诊断员，不作为代写者。
    
- ChatGPT：作为课程指导员，负责节奏、概念解释、复盘和路线调整。
    
- 旧考试：作为外部标准，而不是“感觉自己会了”。
    

## 五、课程之后

完成 Lab 9 以后，再进行：

1. 一个不照书复制的 MSPM0 独立项目。
    
2. 用 Mazidi + NUCLEO-F446RE 把若干核心项目迁移到 STM32F4。
    
3. Volume 2 / ECE445L：更复杂接口、PCB、数据采集、控制、通信、机器人。
    
4. Volume 3 / ECE445M：实时操作系统、信号处理、网络。  
    ''')
    

write('00_guide/PURCHASE_GUIDE_CN.md', r'''

# 中国购买指南（按阶段买，不一次性堆满桌子）

## 第一批：开始前必须有

### 1. 开发板

**准确型号：TI LP-MSPM0G3507 LaunchPad**

不要买成：

- 裸芯片 MSPM0G3507
    
- LP-MSPM0L1306
    
- TM4C123 LaunchPad
    
- 第三方所谓“MSPM0 最小系统板”
    

优先渠道：TI 官方、中国区授权分销商 DigiKey/Mouser。淘宝/闲鱼只有在能确认封装、板号、全新状态和板载 XDS110 正常时才考虑。

官方用户指南写明套件通常包括开发板、Micro-USB 数据线和快速入门指南；实际下单仍应查看商家包装清单。

### 2. 面包板与线

- 一块质量较好的无焊面包板（推荐完整尺寸，至少 830 孔）。
    
- 若干公对公跳线。
    
- 备一些 22 AWG 左右单芯面包板线，接线会比廉价软跳线更整齐可靠。
    

### 3. 数字万用表

必须能可靠测量：

- 直流电压
    
- 电阻
    
- 通断
    

不必第一天购买昂贵台式表。课程明确把万用表当作硬件调试的基本工具。

### 4. 电脑接口

- 课程使用 CCS，需要电脑有可用 USB 数据连接。
    
- 如果电脑只有 USB-C，准备一个可靠转接器或 USB-C 数据线方案。
    
- 线必须传数据，不是仅充电线。
    

## 第二批：Lab 2–5 前购买

课程 Spring 2026 kit 的最低原件如下。国内购买时，电阻与普通 LED 可以使用可靠的同规格等效件；特殊器件尽量按型号。

|数量|器件|课程型号/规格|
|---|---|---|
|2|绿色 5mm LED|LiteOn LTL-4234，约 1.9V/10mA|
|2|红色 5mm LED|LiteOn LTL-4213，约 1.9V/10mA|
|2|黄色 5mm LED|LiteOn LTL-4253，约 1.9V/10mA|
|6|电阻|270Ω，1/4W，5%|
|4|电阻|10kΩ，1/4W，5%|
|3|电阻|12kΩ，1/4W，5%|
|3|电阻|1.5kΩ，1/4W，5%|
|4|轻触开关|Omron B3F-1050 或面包板兼容等效件|
|1|32Ω、约 28mm 扬声器|PUI AS02832MR-2-R 或接近规格|
|1|达林顿阵列|ULN2003A|

实际购买建议把普通 LED、电阻和轻触开关各多买一些，损坏、极性接错和丢件都很常见。

扬声器需要两处焊点。作为自学者，你需要：小功率恒温电烙铁、烙铁架、焊锡、吸锡带/吸锡器、护目与通风条件。先阅读课程的焊接安全指南。

## 第三批：Lab 6–9 前购买

### ST7735R 彩色 LCD

课程要求：

- 1.8 英寸左右
    
- 128 × 160
    
- 控制器为 ST7735R
    

课程 KiCad 文件明确包含 Adafruit ST7735R 与 HiLetgo ST7735R 两种符号/引脚方案。国内商品标题常把 ST7735R、ST7735S、不同排线与不同引脚板混写，购买前核对：

- 控制器型号
    
- 模块引脚名称与数量
    
- 是否为 3.3V 逻辑兼容
    
- 分辨率与屏幕方向
    
- 是否与课程驱动支持的 tab/初始化序列一致
    

不要因为“都是 1.8 寸彩屏”就默认兼容。

### 滑动电位器

课程型号：**Bourns PTA2043-2015CPB103，10kΩ**。它被用作位置传感器/换能器。为了让机械尺寸、行程和标定更接近实验，优先按型号购买；找不到时再选直线型 10kΩ 滑动电位器，并准备修改机械/标定参数。

### 可选音频插座

Lab 5 的 3.5mm audio jack 不在标准 kit 中。先用扬声器完成实验即可；需要耳机接口时再购买与课程原理图兼容的插座。

## 暂时不要买

- Honors Lab 8H 的红外 LED 与 38kHz 接收器。
    
- RSLK 机器人套件。
    
- STM32 Nucleo 板。
    
- 示波器、逻辑分析仪等较贵仪器。
    
- PCB 打样与整套焊接设备。
    

先把开发板、面包板、万用表和前几个 Lab 跑通。后续是否需要示波器/逻辑分析仪，要依据真实项目决定。

## 到货验收

1. 拍下包装和板号。
    
2. 检查 USB 口、排针、跳帽和板面是否有损伤。
    
3. 接入数据 USB，确认电源灯亮。
    
4. 运行官方 Out-of-Box demo。
    
5. 记录序列号/购买渠道/到货日期到 `hardware/INVENTORY.md`。  
    ''')
    

write('00_guide/SETUP_AND_WORKFLOW.md', r'''

# 软件安装与工作流

## 现在先不要做的事

不要看到 TI 官网有“最新 CCS/SDK”就立刻随手安装。ECE319K Spring 2026 提供了自己的 CCS 安装说明和 starter installer；课程代码、编译器、SDK 与工程配置之间可能存在版本耦合。

正确顺序：

1. 先把公开的 CCS 安装 Google Doc 导出到本地。
    
2. 找出它指定的 CCS 版本、安装组件、目录和 Spring 2026 installer。
    
3. 让 Codex把这些信息写入 `software/ENVIRONMENT_LOCK.md`。
    
4. 再安装，并记录版本号与安装路径。
    
5. 第一个已知工程成功编译、下载、单步调试以后，才开始 Lab 1。
    

## 课程特别强调的工程习惯

课程下载页明确建议：**不要随意创建新 CCS project；复制一个现有的、已知可运行的工程文件夹，再修改。**

这能避免初学者被 linker script、target config、SDK include path、编译器选项等与核心知识无关的问题拖住。

本项目因此采用：

```
labs/LabXX_*/
├── official/   # 官方文档/只读参考
├── starter/    # 官方 starter project 原样副本/尽量只读
├── work/       # 从 starter 复制后实际修改
├── evidence/   # 照片、输出、测量、截图、视频
└── notes/      # 思考、错误、复盘
```

## Codex可以做什么

- 检查 CCS/SDK/Python/Git/KiCad/Octave 版本。
    
- 下载、校验和分类公开资源。
    
- 对比 starter 与 work 的差异。
    
- 解释编译错误、链接错误、HardFault、寄存器和内存状态。
    
- 运行静态检查、生成构建日志、维护 STATUS。
    
- 在你明确理解后实施小范围修改。
    

## Codex不应做什么

- 一次性替你写完整 Lab。
    
- 未经说明更换库、重写架构或把寄存器代码全换成黑盒框架。
    
- 覆盖 starter 原文件。
    
- 隐藏来源、删除错误证据、伪造实验结果。
    
- 未经确认安装系统软件或执行破坏性命令。
    

## 板子“变砖”时

课程下载页给出的 BSL 恢复思路：按住靠近 LED 的 BSL_Invoke 按钮 S1，同时按下并释放 Reset；设备约在 BSL active 状态停留 10 秒，应立即尝试重新编程。课程还链接了 TI Factory Reset Tool。

恢复操作前先保存：错误日志、最后一次修改、板上跳帽位置和供电情况。  
''')

write('00_guide/SELF_STUDY_PLAN.md', r'''

# 建议自学节奏：18 个单元，不照搬 UT 的压缩学期

这不是死日历。每个单元以“完成可验证产物”为结束标准。

|单元|内容|产物|
|---|---|---|
|0|网站地图、采购、先修诊断|确定设备订单与 prerequisite gap|
|1|CCS、驱动、官方 demo、调试界面|能连接、编译、下载、单步、看寄存器/内存|
|2|Chapter 1 前半：数字、寄存器、内存|汇编小程序与调试记录|
|3|Chapter 1 后半：函数、AAPCS、数组|Lab 1 完成与 Exam1 基础题|
|4|Chapter 2：GPIO 与基础电路|Lab 2，按键/LED，万用表测量|
|5|Chapter 3 前半：C 数据与控制|小型 C 练习|
|6|Chapter 3 后半：函数、指针、数组、调试|Lab 3|
|7|Chapter 4：struct、FSM、SysTick|Lab 4 交通灯|
|8|第一阶段复盘|Exam 1 旧题，补洞|
|9|Chapter 5：中断、DAC、声音|Lab 5 数字钢琴|
|10|Chapter 6 前半：栈、局部变量、C/汇编接口|函数调用与栈证据|
|11|Chapter 6 后半：SPI、LCD、定点数|Lab 6|
|12|第二阶段复盘|Exam 2 practice system|
|13|Chapter 7 前半：ADC、采样|ADC 原始数据与标定实验|
|14|Chapter 7 后半：实时采样、显示|Lab 7|
|15|Chapter 8：UART、FIFO、中断并发|Lab 8|
|16|Chapter 9：系统架构、sprites、声音|游戏设计文档与最小可玩版本|
|17|Lab 9 完成|完整演示、测试、复盘|
|18|独立项目与全课程验收|Final 旧题 + 独立系统|

每个单元至少留下：

- 一份可运行代码；
    
- 一项真实硬件或调试证据；
    
- 一段“为什么会这样”的解释；
    
- 一条失败记录；
    
- 一道脱离示例完成的变式任务。  
    ''')
    

write('STATUS.md', r'''

# 当前状态

- 当前阶段：站点审计与本地工作区初始化
    
- 当前单元：Unit 0
    
- 已完成：课程公开网页第一轮映射；建立资源清单与下载脚本
    
- 阻塞：Google Docs 正文尚未在本工作区导出；Spring 2026 installer 的准确版本尚未锁定
    
- 下一步：在本机用 Codex运行 dry-run，下载公开 Google Docs 和直接文件，生成下载报告
    
- 硬件状态：待填写
    
- CCS 状态：不要安装，待读取官方安装文档
    

## 本周完成定义

-  解压并用 Codex打开本目录
    
-  运行下载器 dry-run
    
-  导出/下载 CCS 安装文档、Introduction、Setup、LabDemo、Lab1
    
-  生成 `software/ENVIRONMENT_LOCK.md`
    
-  确认 LP-MSPM0G3507 购买渠道  
    ''')
    

write('DECISIONS.md', r'''

# 关键决策记录

## 2026-07-29

- 第一主线确定为 Valvano/Yerraballi 的 MSPM0 版 ECE319K。
    
- 旧 TM4C123 Volume 1 不作为并行课程。
    
- Dean 不作为第二套完整入门课；保留作并发/效率/DMA参考。
    
- Mazidi 放到 ECE319K完成后的 STM32F4 迁移阶段。
    
- 本地目录不做全站镜像；只下载可复用静态资源，动态网页建立索引。
    
- 不自动下载或分发非授权教材副本。
    
- CCS 安装版本要以 Spring 2026 课程文档为准，未锁定前不盲装。  
    ''')
    

# Resource manifest

resources = [  
('root_author','index','Valvano author/course hub','https://users.ece.utexas.edu/~valvano/','resources/site_index/valvano_home.html','direct','core','作者、书、课程与后续路线入口'),  
('root_mspm0','index','ECE319K MSPM0 hub','https://users.ece.utexas.edu/~valvano/mspm0/','resources/site_index/mspm0_home.html','direct','core','Frame 页面；主要使用子页面'),  
('syllabus_sp26','core','Spring 2026 syllabus','https://users.ece.utexas.edu/~valvano/mspm0/EE319KSp26.html','resources/core/EE319K_Spring_2026_Syllabus.html','direct','core','课程目标、设备、先修、政策'),  
('ebook_preface','ebook','E-book Preface','https://users.ece.utexas.edu/~valvano/mspm0/ebook/preface.htm','resources/ebook/preface.html','direct','core','课程哲学、三卷关系'),  
('ebook_toc','ebook','E-book Table of Contents','https://users.ece.utexas.edu/~valvano/mspm0/ebook/toc.htm','resources/ebook/toc.html','direct','core','九章与附录入口'),  
('ebook_ch1','ebook','Chapter 1 Introduction','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch1_Introduction.html','resources/ebook/Ch1_Introduction.html','direct','core','在线阅读；含互动/视频时离线副本可能不完整'),  
('ebook_ch2','ebook','Chapter 2 Switches LEDs','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch2_IntroToInterfacing.html','resources/ebook/Ch2_IntroToInterfacing.html','direct','core','GPIO和基础接口'),  
('ebook_ch3','ebook','Chapter 3 C Programming','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch3_IntroToC.html','resources/ebook/Ch3_IntroToC.html','direct','core','C与调试'),  
('ebook_ch4','ebook','Chapter 4 FSM','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch4_FiniteStateMachines.html','resources/ebook/Ch4_FiniteStateMachines.html','direct','core','FSM/SysTick'),  
('ebook_ch5','ebook','Chapter 5 Interrupts DAC Sound','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch5_DACSound.html','resources/ebook/Ch5_DACSound.html','direct','core','中断、DAC、声音'),  
('ebook_ch6','ebook','Chapter 6 Locals LCD','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch6_LCD.html','resources/ebook/Ch6_LCD.html','direct','core','栈、SPI、LCD、定点数'),  
('ebook_ch7','ebook','Chapter 7 ADC Sampling','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch7_ADC.html','resources/ebook/Ch7_ADC.html','direct','core','ADC与采样'),  
('ebook_ch8','ebook','Chapter 8 Communication','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch8_Serial.html','resources/ebook/Ch8_Serial.html','direct','core','UART/FIFO'),  
('ebook_ch9','ebook','Chapter 9 System Design','https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch9_GameDesign.html','resources/ebook/Ch9_GameDesign.html','direct','core','完整游戏系统'),  
('lectures','core','Spring 2026 lectures map','https://users.ece.utexas.edu/~valvano/mspm0/lectures.htm','resources/core/lectures.html','direct','core','每周讲义、阅读、Box链接'),  
('lecture_box','lecture','All PowerPoints and example code','https://utexas.app.box.com/s/9frv037h3peu2mkixyjmjk8vv2q7eacy','resources/lectures/BOX_MANUAL_DOWNLOAD.txt','manual','core','共享Box文件夹；让Codex/浏览器列出并下载，保持原层级'),  
('labs','core','Labs schedule and links','https://users.ece.utexas.edu/~valvano/mspm0/labs.html','resources/core/labs.html','direct','core','Lab 0–9总入口'),  
('downloads','core','Downloads and tools','https://users.ece.utexas.edu/~valvano/mspm0/downloads.htm','resources/core/downloads.html','direct','core','starter、KiCad、恢复、工具'),  
('datasheets','reference','Datasheets index','https://users.ece.utexas.edu/~valvano/mspm0/datasheets.htm','resources/core/datasheets.html','direct','core','芯片、板卡和器件资料'),  
('exams','assessment','Old exams and practice systems','https://users.ece.utexas.edu/~valvano/mspm0/exams.htm','resources/assessment/exams.html','direct','recommended','考核入口'),  
('quizzes','assessment','Quiz scope','https://users.ece.utexas.edu/~valvano/mspm0/quizzes.htm','resources/assessment/quizzes.html','direct','recommended','Canvas quiz不可公开；使用worksheet替代'),  
('kit_bom','hardware','Spring 2026 kit list','https://users.ece.utexas.edu/~valvano/mspm0/EE319Kkit.txt','hardware/official/EE319Kkit.txt','direct','core','课程器件清单'),  
('soldering','hardware','Soldering Guide','https://users.ece.utexas.edu/~valvano/mspm0/SolderingGuide.pdf','hardware/official/SolderingGuide.pdf','direct','recommended','安全与焊接技巧'),  
('pin_card','hardware','LaunchPad pin card','https://users.ece.utexas.edu/~valvano/mspm0/LaunchPadPinsMSPM0.pdf','hardware/official/LaunchPadPinsMSPM0.pdf','direct','core','100%打印并套在板底辅助接线'),  
('launchpad_guide','reference','LP-MSPM0G3507 User Guide','https://users.ece.utexas.edu/~valvano/mspm0/LP_MSPM0G3507_users_guide.pdf','references/official/LP_MSPM0G3507_users_guide.pdf','direct','core','板载硬件、跳帽、原理图'),  
('mcu_datasheet','reference','MSPM0G3507 Datasheet','https://users.ece.utexas.edu/~valvano/mspm0/mspm0g3507.pdf','references/official/mspm0g3507.pdf','direct','recommended','器件电气与引脚'),  
('mcu_trm','reference','MSPM0G Family TRM','https://users.ece.utexas.edu/~valvano/mspm0/MSPM0G-TRM.pdf','references/official/MSPM0G-TRM.pdf','direct','recommended','外设寄存器和行为'),  
('cortex_trm','reference','Cortex-M0+ TRM','https://users.ece.utexas.edu/~valvano/mspm0/Cortex_M0p_TRM.pdf','references/official/Cortex_M0p_TRM.pdf','direct','later','内核细节'),  
('arm_v6m','reference','Armv6-M Architecture Reference','https://users.ece.utexas.edu/~valvano/mspm0/Arm_Architecture_v6m_Reference_Manual.pdf','references/official/Arm_Architecture_v6m_Reference_Manual.pdf','direct','later','指令集/架构'),  
('assembly_ref','reference','Course Cortex-M0+ assembly appendix','https://users.ece.utexas.edu/~valvano/mspm0/CortexM0plus.pdf','references/course/CortexM0plus.pdf','direct','core','汇编参考'),  
('armclang','reference','Arm clang reference','https://users.ece.utexas.edu/~valvano/mspm0/ArmClang_Reference_Guide_100067_0612_00_en.pdf','references/official/ArmClang_Reference_Guide.pdf','direct','later','编译器细节'),  
('kicad_sch','hardware','KiCad starter schematic','https://users.ece.utexas.edu/~valvano/mspm0/Starter.kicad_sch','hardware/kicad/Starter.kicad_sch','direct','later','课程外设符号与原理图模板'),  
('kicad_pcb','hardware','KiCad starter PCB','https://users.ece.utexas.edu/~valvano/mspm0/Starter.kicad_pcb','hardware/kicad/Starter.kicad_pcb','direct','later','PCB模板'),  
('kicad_pro','hardware','KiCad starter project','https://users.ece.utexas.edu/~valvano/mspm0/Starter.kicad_pro','hardware/kicad/Starter.kicad_pro','direct','later','PCB项目配置'),  
('header','software','MSPM0 register header','https://users.ece.utexas.edu/~valvano/mspm0/mspm0g350x.h','software/course_files/mspm0g350x.h','direct','recommended','课程寄存器地址头文件'),  
('lab7_accuracy','tool','Lab 7 accuracy calculator','https://users.ece.utexas.edu/~valvano/mspm0/Lab7Accuracy.html','labs/Lab07_ADC_Position/official/Lab7Accuracy.html','direct','later','标定/精度计算'),  
('wav_convert','tool','Lab 9 WAV conversion script','https://users.ece.utexas.edu/~valvano/mspm0/WC.m','labs/Lab09_Game/official/WC.m','direct','later','Matlab/Octave声音转C'),  
('bmp_convert','tool','BMP to C converter','https://users.ece.utexas.edu/~valvano/mspm0/BmpConvert16.exe','labs/Lab09_Game/official/BmpConvert16.exe','direct','later','Windows工具'),  
('bmp_readme','tool','BMP converter readme','https://users.ece.utexas.edu/~valvano/mspm0/BMPConvert16Readme.txt','labs/Lab09_Game/official/BMPConvert16Readme.txt','direct','later','工具说明'),  
('exam2_zip','assessment','Exam 2 MSPM0 practice systems','https://users.ece.utexas.edu/~valvano/mspm0/Exam2_MSPM0_StudentVersions.zip','resources/assessment/Exam2_MSPM0_StudentVersions.zip','direct','recommended','第二阶段实机编程检验'),  
]

with (root/'resources/resource_manifest.csv').open('w', newline='', encoding='utf-8-sig') as f:  
w=csv.writer(f); w.writerow(['id','category','title','url','destination','download_mode','priority','notes']); w.writerows(resources)

# Google Docs manifest

gdocs = [  
('course_intro','课程实验总说明/Read First','1cLWgH8kY-Pi2QzsqWFjBVtnKCqVl7dkIA9kcZElth24','resources/google_docs/Course_Introduction','core','先读'),  
('lab_setup','Lab system setup','12rfrT3Fdc52y6kLLG-svqnoqgqclL61Ty2rssVRFZ8I','labs/Lab00_Setup/official/Lab_Setup','core','实验系统准备'),  
('ccs_install','CCS installation directions','1vXgQQjhgNKa_yWAOaUQd8dnDtiaNL0WN5wcsK0VfqvY','software/official/CCS_Install_Directions','core','安装前必须读取，锁定版本'),  
('lab_demo','Lab Demo tutorial','1-qOGf9VTTRDRB1WfCW5GFyKkwGHRSCrlL-JUFxwSZ0E','labs/Lab00_Setup/official/Lab_Demo','core','真板教程'),  
('lab1','Lab 1 Assembly','1cY3-rhal_bWPhGae6U46LhC7vQ8Hntl-oeOAQVJRb7Q','labs/Lab01_Assembly/official/Lab01','core','Cortex-M0+汇编'),  
('lab2','Lab 2 Switch LED','19_VJi5KEg8D8H--66IB1oFshJsfNRvBK2uDa73uMB-o','labs/Lab02_GPIO/official/Lab02','core','开关与LED'),  
('lab3','Lab 3 C Debugging','1RCujImCPjWohSSFXMtGow30kA8z4wtupY6k--reNqL0','labs/Lab03_C_Debugging/official/Lab03','core','C与调试'),  
('lab4','Lab 4 Traffic Light FSM','1yoxg4W9qrziwlOyySFFkZedpKebpfaek39ePyLrR09k','labs/Lab04_FSM/official/Lab04','core','交通灯FSM'),  
('lab5','Lab 5 Digital Piano','1DVmHjqsx24FvLp4x8KKyr5UmDeDlBlfeQPsVvKFQF_k','labs/Lab05_DAC_Sound/official/Lab05','core','DAC声音'),  
('lab6','Lab 6 LCD','1lVT-jDF0fQfOZajD0rh0VXANagwhe1s4Z-XJxgvFi4g','labs/Lab06_LCD/official/Lab06','core','LCD/定点数/局部变量'),  
('lab7','Lab 7 Position Monitor','1-smC_8vJaijMNBOMOUyrPqcNY8950WaADe12J1YxGWk','labs/Lab07_ADC_Position/official/Lab07','core','ADC/中断/LCD'),  
('lab8','Lab 8 UART Distributed DAS','1tzu3TQf8An2iZwf1XHU4toGyWTGv22Leb_36l0G2jbg','labs/Lab08_UART_FIFO/official/Lab08','core','UART/FIFO/并发'),  
('lab9','Lab 9 Game','1jTirjKJEecPcTYQ2Q7XTRVthQzV7BMr5INipn7f04u8','labs/Lab09_Game/official/Lab09','core','完整游戏'),  
('pcb_camp_sp26','Spring 2026 PCB Camp','1ir_I177Hl1AgoTV9xb124Sa9I-U0SakBrhbrAZalU8E','future/pcb/PCB_Camp_Spring_2026','later','完成基础实验后'),  
('pcb_camp_f24','Fall 2024 PCB Camp','1pAPRIzIFQAkn9DdnRGrXMKobLK4YGEfCUWt4oOmgO54','future/pcb/PCB_Camp_Fall_2024','later','旧版比较'),  
('rslk','Robot Systems Learning Kit roadmap','11wp2RbnZV15mRgctMgae81lJd9SU2MToSahXqwRGQOs','future/volume2/RSLK_Roadmap','later','Volume 2'),  
]  
with (root/'resources/google_docs_manifest.csv').open('w', newline='', encoding='utf-8-sig') as f:  
w=csv.writer(f); w.writerow(['id','title','document_id','destination_base','priority','notes']); w.writerows(gdocs)

write('resources/README.md', r'''

# 资源目录说明

- `resource_manifest.csv`：普通网页、PDF、ZIP、代码和工具的索引。
    
- `google_docs_manifest.csv`：课程 Google Docs；下载器会尝试导出 PDF 和 DOCX。
    
- `core/`：课程地图页面。
    
- `ebook/`：在线电子书的离线 HTML 快照。交互内容、嵌入视频和相对链接可能仍需联网。
    
- `lectures/`：UT Box 讲义与示例。Box 文件夹不一定能被简单 HTTP 下载，需要浏览器/Codex逐项处理。
    
- `assessment/`：旧考试与 practice systems。
    
- `site_index/`：动态入口快照，不应当替代在线网页。
    

下载后查看 `resources/download_report.json`，不要只看“文件存在”；HTML 登录页可能伪装成 PDF 下载失败。  
''')

# Download script

write('scripts/download_resources.py', r'''  
#!/usr/bin/env python3  
"""下载 ECE319K 公开资源。

用法：  
python scripts/download_resources.py --dry-run --priority core  
python scripts/download_resources.py --priority core  
python scripts/download_resources.py --priority recommended  
python scripts/download_resources.py --priority all

Google Docs 会尝试导出 PDF 和 DOCX。Box 共享目录与需登录资源会标记为 manual。  
"""  
from **future** import annotations  
import argparse, csv, json, time, urllib.request, urllib.error  
from pathlib import Path

ROOT = Path(**file**).resolve().parents[1]  
UA = "Mozilla/5.0 ValvanoMSPM0SelfStudy/1.0"

def fetch(url: str, destination: Path, dry_run: bool=False) -> dict:  
result = {"url": url, "destination": str(destination.relative_to(ROOT)), "status": "pending"}  
if dry_run:  
result["status"] = "dry-run"  
return result  
destination.parent.mkdir(parents=True, exist_ok=True)  
req = urllib.request.Request(url, headers={"User-Agent": UA})  
last_error = None  
for attempt in range(3):  
try:  
with urllib.request.urlopen(req, timeout=60) as response:  
data = response.read()  
ctype = response.headers.get("Content-Type", "")  
final_url = response.geturl()  
# Detect common login/permission HTML masquerading as a document.  
lower = data[:1000].lower()  
expected_binary = destination.suffix.lower() in {'.pdf','.zip','.docx','.exe'}  
if expected_binary and (b'<html' in lower or b'accounts.google.com' in lower):  
raise RuntimeError(f"received HTML/login page instead of {destination.suffix}")  
tmp = destination.with_suffix(destination.suffix + '.part')  
tmp.write_bytes(data)  
tmp.replace(destination)  
result.update(status="downloaded", bytes=len(data), content_type=ctype, final_url=final_url)  
return result  
except Exception as exc:  
last_error = str(exc)  
time.sleep(1.5 * (attempt + 1))  
result.update(status="failed", error=last_error)  
return result

def selected(priority: str, item_priority: str) -> bool:  
ranks = {"core": 0, "recommended": 1, "later": 2}  
return priority == 'all' or ranks.get(item_priority, 99) <= ranks.get(priority, 0)

def main():  
ap = argparse.ArgumentParser()  
ap.add_argument('--priority', choices=['core','recommended','later','all'], default='core')  
ap.add_argument('--dry-run', action='store_true')  
ap.add_argument('--skip-google-docs', action='store_true')  
args = ap.parse_args()  
report = []

```
with (ROOT/'resources/resource_manifest.csv').open(encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        if not selected(args.priority, row['priority']):
            continue
        if row['download_mode'] == 'manual':
            report.append({"id": row['id'], "url": row['url'], "status": "manual", "notes": row['notes']})
            continue
        r = fetch(row['url'], ROOT/row['destination'], args.dry_run)
        r['id'] = row['id']; report.append(r)
        print(f"[{r['status']}] {row['id']} -> {row['destination']}")

if not args.skip_google_docs:
    with (ROOT/'resources/google_docs_manifest.csv').open(encoding='utf-8-sig') as f:
        for row in csv.DictReader(f):
            if not selected(args.priority, row['priority']):
                continue
            doc_id = row['document_id']
            for fmt in ('pdf','docx'):
                url = f"https://docs.google.com/document/d/{doc_id}/export?format={fmt}"
                dest = ROOT / f"{row['destination_base']}.{fmt}"
                r = fetch(url, dest, args.dry_run)
                r['id'] = f"{row['id']}_{fmt}"; report.append(r)
                print(f"[{r['status']}] {row['id']} ({fmt}) -> {dest.relative_to(ROOT)}")

out = ROOT/'resources/download_report.json'
if not args.dry_run:
    out.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
counts = {}
for r in report: counts[r['status']] = counts.get(r['status'],0)+1
print("\nSummary:", counts)
if any(r['status']=='failed' for r in report):
    print("Some files failed. Open resources/download_report.json and use a browser for permission/redirect cases.")
```

if **name** == '**main**':  
main()  
''')

write('scripts/verify_downloads.py', r'''  
#!/usr/bin/env python3  
"""Basic verification of downloaded files; identifies missing/empty/HTML-masquerading binaries."""  
from pathlib import Path  
import csv, json  
ROOT=Path(**file**).resolve().parents[1]  
issues=[]  
with (ROOT/'resources/resource_manifest.csv').open(encoding='utf-8-sig') as f:  
for r in csv.DictReader(f):  
if r['download_mode']=='manual': continue  
p=ROOT/r['destination']  
if not p.exists():  
issues.append({'id':r,'issue':'missing','path':str(p.relative_to(ROOT))}); continue  
data=p.read_bytes()[:1000].lower()  
if p.stat().st_size==0: issues.append({'id':r,'issue':'empty','path':str(p.relative_to(ROOT))})  
if p.suffix.lower() in {'.pdf','.zip','.docx','.exe'} and b'<html' in data:  
issues.append({'id':r,'issue':'html_instead_of_binary','path':str(p.relative_to(ROOT))})  
print(json.dumps(issues,ensure_ascii=False,indent=2))  
raise SystemExit(1 if issues else 0)  
''')

write('scripts/README.md', r'''

# 下载脚本

先 dry-run：

```
python scripts/download_resources.py --dry-run --priority core
```

再下载第一阶段资源：

```
python scripts/download_resources.py --priority core
python scripts/verify_downloads.py
```

`recommended` 会增加考试与较深入参考；`later` 会加入 PCB、工具和更多手册；`all` 下载全部清单。

脚本不会递归下载 Box 文件夹，也不能绕过 Google/UT 登录权限。失败项记录在 `resources/download_report.json`。  
''')

write('software/README.md', r'''

# 软件区

预期软件：

- Code Composer Studio（准确版本待官方 Spring 2026 Google Doc 锁定）
    
- Spring 2026 ECE319K installer/starter files
    
- MSPM0 SDK（版本需与课程工程确认）
    
- Git
    
- Python 3（只用于资料管理脚本，不是 MCU 主语言）
    
- 后期可选：KiCad、GNU Octave、图像转换工具
    

Codex必须创建并维护 `ENVIRONMENT_LOCK.md`，内容包括版本、安装路径、编译器、SDK、成功构建工程及日期。  
''')

write('hardware/INVENTORY.md', r'''

# 硬件库存

|类别|型号/规格|数量|渠道|到货日期|验收状态|备注|
|---|---|---|---|---|---|---|
|开发板|LP-MSPM0G3507|0|||待购|不要买裸芯片或其他 LaunchPad|
|面包板|约830孔|0|||待购||
|万用表|直流V/Ω/通断|0|||待购||
|LCD|1.8in 128×160 ST7735R|0|||待购|下单前核对引脚/控制器|
|''')|||||||

# BOM CSV

bom = [  
('LP-MSPM0G3507','1','TI LaunchPad','必须','Unit 1','官方/授权分销'),  
('无焊面包板','1','完整尺寸约830孔','必须','Unit 1','质量优先'),  
('公对公跳线/单芯线','若干','面包板兼容','必须','Unit 1',''),  
('数字万用表','1','DCV/电阻/通断','必须','Unit 1',''),  
('绿色LED','2+','LTL-4234或等效','必须','Lab2','建议备件'),  
('红色LED','2+','LTL-4213或等效','必须','Lab2','建议备件'),  
('黄色LED','2+','LTL-4253或等效','必须','Lab4','建议备件'),  
('270Ω 1/4W 5%','6+','CFR16J270R或等效','必须','Lab2','建议备件'),  
('10kΩ 1/4W 5%','4+','CFR16J10K或等效','必须','Lab2',''),  
('12kΩ 1/4W 5%','3+','CFR16J12K或等效','必须','Lab5',''),  
('1.5kΩ 1/4W 5%','3+','CFR16J1K5或等效','必须','Lab5',''),  
('轻触开关','4+','Omron B3F-1050或面包板等效','必须','Lab2',''),  
('滑动电位器','1','Bourns PTA2043-2015CPB103 10k','必须','Lab7/8/9','尽量原型号'),  
('扬声器','1','PUI AS02832MR-2-R 32Ω 28mm','必须','Lab5','需要焊两点'),  
('ULN2003A','1','Darlington array','课程kit','后期/扩展',''),  
('ST7735R LCD','1','1.8in 128×160','必须','Lab6','核对模块与驱动'),  
('3.5mm audio jack','0/1','与原理图兼容','可选','Lab5','标准kit不含'),  
('IR LED','0','OED-EL-1L2','不买','Honors Lab8H','普通路线不需要'),  
('38kHz IR receiver','0','TSOP32438','不买','Honors Lab8H','普通路线不需要'),  
]  
with (root/'hardware/BOM.csv').open('w',newline='',encoding='utf-8-sig') as f:  
w=csv.writer(f);w.writerow(['item','quantity','spec/model','need','when','notes']);w.writerows(bom)

# Lab scaffolding

labs = [  
('Lab00_Setup','环境、板卡连接与Lab Demo','Chapter 1 intro','成功连接、构建、下载、单步调试'),  
('Lab01_Assembly','Cortex-M0+汇编','Chapter 1','汇编程序与寄存器/内存证据'),  
('Lab02_GPIO','开关、LED与GPIO','Chapter 2','按键控制LED及万用表测量'),  
('Lab03_C_Debugging','C与调试dump','Chapter 3','C程序、调试记录与数据证据'),  
('Lab04_FSM','交通灯有限状态机','Chapter 4','FSM图、代码与演示'),  
('Lab05_DAC_Sound','5-bit DAC数字钢琴','Chapter 5','声音输出与波形/电压记录'),  
('Lab06_LCD','SPI LCD与定点数','Chapter 6','ST7735R驱动和格式化显示'),  
('Lab07_ADC_Position','ADC实时位置监视','Chapter 7','标定曲线、实时显示、精度分析'),  
('Lab08_UART_FIFO','UART/FIFO分布式DAS','Chapter 8','并发串行通信系统'),  
('Lab09_Game','完整游戏系统','Chapter 9','可玩游戏、演示、架构与复盘'),  
]  
for folder, title, chapter, outcome in labs:  
base=f'labs/{folder}'  
for sub in ['official','starter','work','evidence','notes']:  
(root/base/sub).mkdir(parents=True,exist_ok=True)  
(root/base/sub/'.gitkeep').write_text('',encoding='utf-8')  
write(f'{base}/README.md', f'''

# {title}

- 对应教材：{chapter}
    
- 完成定义：{outcome}
    

## 开始前

-  官方 Lab 文档已下载并阅读
    
-  对应 lecture/worksheet 已定位
    
-  starter 保持原样，work 从 starter 复制
    
-  所需器件已验收
    
-  写出输入、输出、约束和接线草图
    

## 完成证据

-  clean build 日志
    
-  真板演示照片/视频
    
-  必要的电压、串口、内存或波形证据
    
-  一项脱离示例的变式
    
-  `notes/POSTMORTEM.md`
    

## 关键问题

1. 数据从物理世界经过哪些电路和寄存器进入软件？
    
2. 每个模块的接口和不变量是什么？
    
3. 哪部分是 Cortex-M 通用概念，哪部分是 MSPM0 特有？
    
4. 失败时观察到了什么，证据如何排除假设？  
    ''')  
    write(f'{base}/notes/POSTMORTEM.md', r'''
    

# Lab 复盘

## 做出了什么

## 最难的问题

## 错误现象与证据

## 根因

## 修复

## 我现在能解释的软硬件因果链

## 脱离示例做的变式

## 下次可迁移的经验

''')

write('future/README.md', r'''

# 后续路线（现在只建索引，不展开）

## Volume 2 / ECE445L

接口与嵌入式系统设计：更复杂 I/O、实时调试、缓冲中断、控制、LCD/键盘、PCB、数据采集、电机、Wi-Fi/MQTT、完整系统与 RSLK。

## Volume 3 / ECE445M

实时操作系统、调度/同步、信号处理、网络设计。

## STM32 迁移

完成 ECE319K与一个独立 MSPM0 项目后，再建立 `future/stm32_f4/`，使用 Mazidi + NUCLEO-F446RE 迁移 GPIO、中断、Timer、ADC、UART、SPI/I²C。  
''')

write('codex/CODEX_BOOTSTRAP_PROMPT.md', r'''

# 给 Codex 的首次接管提示词

你现在位于 `Valvano_MSPM0_Learning_System` 根目录。这个项目不是普通代码库，而是一个长期嵌入式学习工作区。请先阅读：

- `README.md`
    
- `00_guide/COURSE_MAP.md`
    
- `00_guide/SETUP_AND_WORKFLOW.md`
    
- `STATUS.md`
    
- `resources/resource_manifest.csv`
    
- `resources/google_docs_manifest.csv`
    

然后按以下规则工作：

1. **先审计，不要立刻安装或修改系统。** 检查 OS、Python、Git、磁盘、已有 CCS/SDK/KiCad/Octave，并把结果写入 `software/LOCAL_AUDIT.md`。
    
2. 运行 `python scripts/download_resources.py --dry-run --priority core`，展示计划，不立即下载；发现 URL 或目录错误先修清单。
    
3. 经用户同意后，下载 core 资源。Google Docs 分别尝试 PDF/DOCX；若返回登录页、权限错误或禁止导出，写入 `resources/MANUAL_DOWNLOADS.md`，给出用户在浏览器中的手动步骤。
    
4. 对 UT Box 共享文件夹，使用可用的浏览器能力列出文件。只下载 ECE319K Spring 2026 lecture slides、worksheets、example code，并保持课程原目录/文件名；不要抓取无关个人资料。
    
5. 读取 CCS installation Google Doc，提取准确的 CCS/SDK/installer 版本、下载来源、安装步骤和目录，写入 `software/ENVIRONMENT_LOCK.md`。**在版本未锁定前不要安装最新版。**
    
6. 不修改 `official/` 和 `starter/` 中的原始文件。实际工程必须复制到 `work/` 后修改。
    
7. 每次修改前说明目的；修改后运行可行的构建/检查并保存日志。不要未经确认执行删除、覆盖、全局安装或管理员命令。
    
8. 不替用户整份完成 Lab。优先：解释现象 → 提出可检验假设 → 指导观察 → 最小补丁 → 要求用户解释。完整代码只在用户已完成核心思考、用于整合或明确要求时提供，并标出来源。
    
9. 维护 `STATUS.md`、`DECISIONS.md` 和每个 Lab 的 `notes/POSTMORTEM.md`。不要擦除失败记录。
    
10. 所有第三方/课程代码保留许可和来源。不要下载或提交非授权教材副本、账户受限内容或个人信息。
    

本次首次任务做到以下位置即停止并汇报：

- 本机审计完成；
    
- core 资源下载/失败清单完成；
    
- Spring 2026 软件版本信息提取完成；
    
- 给出购买 LP-MSPM0G3507 与第一批器材前的最终核对清单；
    
- 不安装 CCS，不开始 Lab 1，等待用户确认。  
    ''')
    

write('.gitignore', r'''

# Build artifacts

**/Debug/  
**/Release/  
**/_.out  
**/_.map  
**/_.obj  
**/_.o  
**/*.d  
**/.metadata/  
**/.ccsproject.user

# Local/private

software/local_installer/  
resources/download_report.json  
*.part  
.DS_Store  
Thumbs.db

# Evidence videos can be huge; store selectively

**/evidence/_.mp4  
**/evidence/_.mov  
''')

# Source audit report

write('00_guide/SITE_AUDIT.md', r'''

# 网站群第一轮审计（2026-07-29）

## 已确认公开可访问

- Valvano 作者/课程主页
    
- ECE319K MSPM0 子站及 Spring 2026 syllabus
    
- 在线电子书九章和附录入口
    
- Lectures/Labs/Downloads/Data sheets/Exams/Quizzes 页面
    
- 课程 kit 文本清单
    
- LaunchPad pin card、KiCad starter、芯片/板卡手册、旧考试等静态文件
    
- Google Docs 的公开标题和分享链接
    
- UT Box 的共享入口链接
    

## 当前网页工具无法完整解析的部分

- Google Docs 正文依赖 JavaScript；页面标题可见，但导出正文需要本地浏览器或下载接口。
    
- UT Box 共享文件夹发生跨域重定向；需要本地 Codex/浏览器列目录和下载。
    
- Canvas quizzes、公告、TA office hours、提交/成绩等需要 UT 登录，不能绕过。
    
- Spotify/YouTube 可作为媒体入口；没有文字稿时无法假定已完整听取。
    

## 因此采用的方案

- 本地脚本尝试 Google Docs `/export?format=pdf` 与 `docx`。
    
- Box 标记为 manual，由 Codex浏览器能力接管。
    
- Canvas 内容用公开 lecture worksheet、旧考试和自建 mastery checks 替代。
    
- 动态在线电子书保留 URL，离线 HTML 只作快照，不宣称完整镜像。
    

## 仍需在本机完成的关键审计

1. Spring 2026 CCS 安装文档指定的准确版本。
    
2. Step 3 installer/starter files 的实际下载 URL 与文件内容。
    
3. Box 讲义目录中 Spring 2026 的 slides、worksheets 与 example code。
    
4. 每个 Lab Google Doc 的器件、接线、starter project 与验收标准。
    
5. ST7735R 模块在课程当前驱动中的确切兼容选项。  
    ''')
    

# A machine-readable metadata

meta = {  
'name':'Valvano MSPM0 Learning System',  
'created':'2026-07-29',  
'primary_course':'UT Austin ECE319K Spring 2026',  
'primary_book':'Introduction to Embedded Systems Using the MSPM0+',  
'target_board':'TI LP-MSPM0G3507',  
'status':'pre-Codex handoff; public-site first-pass audit complete',  
}  
(root/'project.json').write_text(json.dumps(meta,ensure_ascii=False,indent=2),encoding='utf-8')

# Zip

zip_path = Path('/mnt/data/Valvano_MSPM0_Learning_System_v1.zip')  
if zip_path.exists(): zip_path.unlink()  
with zipfile.ZipFile(zip_path,'w',zipfile.ZIP_DEFLATED) as z:  
for p in root.rglob('_'):  
if p.is_file(): z.write(p,p.relative_to(root.parent))  
print(root)  
print(zip_path)  
print(sum(1 for _ in root.rglob('_')),'entries')  
PY  
python /tmp/build_valvano_scaffold.py  
ls -lh /mnt/data/Valvano_MSPM0_Learning_System_v1.zip  
find /mnt/data/Valvano_MSPM0_Learning_System -maxdepth 2 -type f | sort | head -50

Traceback (most recent call last):
  File "/tmp/build_valvano_scaffold.py", line 424, in <module>
    with (root/'resources/resource_manifest.csv').open('w', newline='', encoding='utf-8-sig') as f:
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/lib/python3.13/pathlib/_local.py", line 539, in open
    return io.open(self, mode, buffering, encoding, errors, newline)
           ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
FileNotFoundError: [Errno 2] No such file or directory: '/mnt/data/Valvano_MSPM0_Learning_System/resources/resource_manifest.csv'
ls: cannot access '/mnt/data/Valvano_MSPM0_Learning_System_v1.zip': No such file or directory
/mnt/data/Valvano_MSPM0_Learning_System/00_guide/COURSE_MAP.md
/mnt/data/Valvano_MSPM0_Learning_System/00_guide/PURCHASE_GUIDE_CN.md
/mnt/data/Valvano_MSPM0_Learning_System/00_guide/SELF_STUDY_PLAN.md
/mnt/data/Valvano_MSPM0_Learning_System/00_guide/SETUP_AND_WORKFLOW.md
/mnt/data/Valvano_MSPM0_Learning_System/DECISIONS.md
/mnt/data/Valvano_MSPM0_Learning_System/README.md
/mnt/data/Valvano_MSPM0_Learning_System/STATUS.md

正在搜索 users.ece.utexas.edu

更新章节资源清单并重建压缩包

```
bash -lc python - <<'PY'
from pathlib import Path
import csv, zipfile, shutil
root=Path('/mnt/data/Valvano_MSPM0_Learning_System')
p=root/'resources/resource_manifest.csv'
rows=list(csv.DictReader(p.open(encoding='utf-8-sig')))
fix={
'ebook_ch3':('https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch3_SoftwareDesign.html','resources/ebook/Ch3_SoftwareDesign.html'),
'ebook_ch6':('https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch6_LocalVariables.htm','resources/ebook/Ch6_LocalVariables.htm'),
'ebook_ch7':('https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch7_ADC.htm','resources/ebook/Ch7_ADC.htm'),
'ebook_ch8':('https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch8_SerialCommunication.htm','resources/ebook/Ch8_SerialCommunication.htm'),
'ebook_ch9':('https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch9_EmbeddedSystemDesign.htm','resources/ebook/Ch9_EmbeddedSystemDesign.htm'),
}
for r in rows:
    if r['id'] in fix:
        r['url'],r['destination']=fix[r['id']]
rows += [
{'id':'ebook_electronics','category':'ebook','title':'Appendix Basic Electronics','url':'https://users.ece.utexas.edu/~valvano/mspm0/ebook/Electronics.html','destination':'resources/ebook/Electronics.html','download_mode':'direct','priority':'core','notes':'回补电压电流电阻等'},
{'id':'ebook_logic','category':'ebook','title':'Appendix Digital Logic','url':'https://users.ece.utexas.edu/~valvano/mspm0/ebook/DigitalLogic.html','destination':'resources/ebook/DigitalLogic.html','download_mode':'direct','priority':'core','notes':'先修补桥'},
]
fields=['id','category','title','url','destination','download_mode','priority','notes']
with p.open('w',newline='',encoding='utf-8-sig') as f:
    w=csv.DictWriter(f,fieldnames=fields);w.writeheader();w.writerows(rows)
# Syntax check
import py_compile
py_compile.compile(str(root/'scripts/download_resources.py'),doraise=True)
py_compile.compile(str(root/'scripts/verify_downloads.py'),doraise=True)
# Rezip
zp=Path('/mnt/data/Valvano_MSPM0_Learning_System_v1.zip')
if zp.exists(): zp.unlink()
with zipfile.ZipFile(zp,'w',zipfile.ZIP_DEFLATED) as z:
    for q in root.rglob('*'):
        if q.is_file(): z.write(q,q.relative_to(root.parent))
print('rows',len(rows),'zip',zp.stat().st_size)
PY
unzip -l /mnt/data/Valvano_MSPM0_Learning_System_v1.zip | head -25
python /mnt/data/Valvano_MSPM0_Learning_System/scripts/download_resources.py --dry-run --priority core | tail -8
```

rows 42 zip 53946
Archive:  /mnt/data/Valvano_MSPM0_Learning_System_v1.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
      306  2026-07-29 09:27   Valvano_MSPM0_Learning_System/project.json
      522  2026-07-29 09:27   Valvano_MSPM0_Learning_System/DECISIONS.md
     2001  2026-07-29 09:27   Valvano_MSPM0_Learning_System/README.md
      741  2026-07-29 09:27   Valvano_MSPM0_Learning_System/STATUS.md
      302  2026-07-29 09:27   Valvano_MSPM0_Learning_System/.gitignore
      471  2026-07-29 09:27   Valvano_MSPM0_Learning_System/software/README.md
      731  2026-07-29 09:27   Valvano_MSPM0_Learning_System/resources/README.md
     7761  2026-07-29 09:27   Valvano_MSPM0_Learning_System/resources/resource_manifest.csv
     2139  2026-07-29 09:27   Valvano_MSPM0_Learning_System/resources/google_docs_manifest.csv
      517  2026-07-29 09:27   Valvano_MSPM0_Learning_System/scripts/README.md
      972  2026-07-29 09:27   Valvano_MSPM0_Learning_System/scripts/verify_downloads.py
     4443  2026-07-29 09:27   Valvano_MSPM0_Learning_System/scripts/download_resources.py
     1617  2026-07-29 09:27   Valvano_MSPM0_Learning_System/00_guide/SITE_AUDIT.md
     3916  2026-07-29 09:27   Valvano_MSPM0_Learning_System/00_guide/PURCHASE_GUIDE_CN.md
     2328  2026-07-29 09:27   Valvano_MSPM0_Learning_System/00_guide/SETUP_AND_WORKFLOW.md
     1774  2026-07-29 09:27   Valvano_MSPM0_Learning_System/00_guide/SELF_STUDY_PLAN.md
     4218  2026-07-29 09:27   Valvano_MSPM0_Learning_System/00_guide/COURSE_MAP.md
     2445  2026-07-29 09:27   Valvano_MSPM0_Learning_System/codex/CODEX_BOOTSTRAP_PROMPT.md
      410  2026-07-29 09:27   Valvano_MSPM0_Learning_System/hardware/INVENTORY.md
     1215  2026-07-29 09:27   Valvano_MSPM0_Learning_System/hardware/BOM.csv
      518  2026-07-29 09:27   Valvano_MSPM0_Learning_System/future/README.md
      794  2026-07-29 09:27   Valvano_MSPM0_Learning_System/labs/Lab05_DAC_Sound/README.md
[dry-run] lab7 (pdf) -> labs/Lab07_ADC_Position/official/Lab07.pdf
[dry-run] lab7 (docx) -> labs/Lab07_ADC_Position/official/Lab07.docx
[dry-run] lab8 (pdf) -> labs/Lab08_UART_FIFO/official/Lab08.pdf
[dry-run] lab8 (docx) -> labs/Lab08_UART_FIFO/official/Lab08.docx
[dry-run] lab9 (pdf) -> labs/Lab09_Game/official/Lab09.pdf
[dry-run] lab9 (docx) -> labs/Lab09_Game/official/Lab09.docx

Summary: {'dry-run': 50, 'manual': 1}

正在搜索 www.digikey.cn

思考了 12m 17s

完成

源·117

- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/EE319KSp26.html
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319KSp26.html)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/labs.html
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/labs.html)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/ebook/toc.htm
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/toc.htm)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.digikey.cn&sz=32)
    
    digikey.cn
    
    LP-MSPM0G3507 Texas Instruments | 嵌入式 MCU、DSP 评估板 - DigiKey
    
    ](https://www.digikey.cn/zh/products/detail/texas-instruments/lp-mspm0g3507/20512419)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/LP_MSPM0G3507_users_guide.pdf
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/LP_MSPM0G3507_users_guide.pdf)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/EE319Kkit.txt
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319Kkit.txt)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/Starter.kicad_sch
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/Starter.kicad_sch)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com&sz=32)
    
    Texas Instruments
    
    LP-MSPM0G3507 Evaluation board | TI.com
    
    ](https://www.ti.com/tool/LP-MSPM0G3507)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/downloads.htm
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/downloads.htm)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/lectures.htm
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/lectures.htm)
- [
    
    用户电子与计算机工程系
    
    https://users.ece.utexas.edu/~valvano/mspm0/quizzes.htm
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/quizzes.htm)

- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.sciencedirect.com&sz=32)
    
    sciencedirect.com
    
    metaRLK 2.0: An updated database of plant receptor-like kinases developed with structure- and deep learning-based functional annotation and classification - ScienceDirect
    
    2026年5月11日
    
    ](https://www.sciencedirect.com/science/article/pii/S2590346226000891?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.han-sphere.com&sz=32)
    
    han-sphere.com
    
    The Ultimate PCB Design Guide (2026): Engineering for Manufacturability & Success | HanSphere
    
    2026年5月10日 — The Ultimate PCB Design Guide (2026): Engineering for Manufacturability & Success | HanSphere Home / Blog / Guide /The Ultimate PCB Design Guide: From Concept to Mass Production (2026 Edition) Guid...
    
    ](https://www.han-sphere.com/blog/guide/pcb-design-guide/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://today.uconn.edu&sz=32)
    
    uconn.edu
    
    UConn Engineering Students Launch Hands-on Printed Circuit Board Design Course - UConn Today
    
    2026年5月4日 — UConn Engineering Students Launch Hands-on Printed Circuit Board Design Course - UConn Today May 4, 2026 | Sarah Redmond UConn Engineering Students Launch Hands-on Printed Circuit Board Design Cour...
    
    ](https://today.uconn.edu/2026/05/uconn-engineering-students-launch-hands-on-printed-circuit-board-design-course/?utm_source=chatgpt.com)
- [
    
    github.com
    
    IEEE-PCB-Workshop-Spring-2026/Week04 at main · IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026 · GitHub
    
    2026年3月18日 — IEEE-PCB-Workshop-Spring-2026/Week04 at main · IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026 · GitHub IEEE-U-of-U / IEEE-PCB-Workshop-Spring-2026 Public Notifications You must be signed in to change no...
    
    ](https://github.com/IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026/tree/main/Week04?utm_source=chatgpt.com)
- [
    
    github.com
    
    GitHub - IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026: IEEE PCB Workshop Resources for Spring 2026 at the University of Utah · GitHub
    
    2026年2月17日 — GitHub - IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026: IEEE PCB Workshop Resources for Spring 2026 at the University of Utah · GitHub IEEE-U-of-U / IEEE-PCB-Workshop-Spring-2026 Public Notifications Y...
    
    ](https://github.com/IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    TA Poster - ECE319K
    
    2026年1月21日 — TA Poster - ECE319K Spring 2026 ECE319K TAs Surya Balaji is a second-year ECE student. Outside of class, you’ll usually find him in the gym, on the volleyball court, or trying out new food spots wi...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/TAposter.htm?utm_source=chatgpt.com)
- [
    
    cliffsnotes.com
    
    ECE319KECE445M CCS Installation Step By Step (pdf) - CliffsNotes
    
    2026年1月20日
    
    ](https://www.cliffsnotes.com/study-notes/30999681?utm_source=chatgpt.com)
- [
    
    cliffsnotes.com
    
    Mastering Cortex M Assembly: Lab 1 Guide and Procedures - CliffsNotes
    
    2026年1月20日
    
    ](https://www.cliffsnotes.com/study-notes/33324190?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    2026年1月12日 — ECE319K Introduction to Embedded Systems Overview Textbook Sp26 Syllabus E-book Pictures of TAs Lectures Labs Quizzes Downloads Exams Data sheets C Programming PCB Camp Updated: 2/8/26 ECE319K/ECE3...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://blog.csdn.net&sz=32)
    
    csdn.net
    
    CCS开发环境搭建：超详细版安装与配置指南-CSDN博客
    
    2026年1月6日 — CCS开发环境搭建:超详细版安装与配置指南-CSDN博客 CCS开发环境搭建:超详细版安装与配置指南 原创 于 2026-01-06 11:17:30 发布 · 1.4k 阅读 · 20 · 11 从零搭建TI嵌入式开发环境:CCS安装、调试与实战避坑全指南 你是不是也曾面对一块崭新的TMS320F28379D LaunchPad板子,满心期待地插上XDS110下载器,打开Code Comp...
    
    ](https://blog.csdn.net/weixin_33610780/article/details/156666628?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K/ECE319H: Introduction to Embedded Systems
    
    2024年8月29日 — ECE319K/ECE319H: Introduction to Embedded Systems ECE319K Introduction to Embedded Systems, Fall 2024 (See Canvas for most up to date office hours, August 29, 2024) Email all professors and TAs (f2...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319KF24.html?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://hint-lab.com&sz=32)
    
    hint-lab.com
    
    [Google]Googleドライブのファイルをダウンロードさせる│Hint Lab
    
    2024年7月7日 — [Google]Googleドライブのファイルをダウンロードさせる│Hint Lab [Google]Googleドライブのファイルをダウンロードさせる 2024年7月7日 2025年3月25日 Google, Tips HOME Google [Google]Googleドライブのファイルをダウンロードさせる この記事にはプロモーションが含まれています。 (2025.3.25追記) ダウン...
    
    ](https://hint-lab.com/googledrive_download/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://dev.to&sz=32)
    
    dev.to
    
    How to download Google Docs as a PDF directly from the shareable link - DEV Community
    
    2024年3月25日 — How to download Google Docs as a PDF directly from the shareable link - DEV Community Dinesh Haribabu Posted on Mar 25, 2024 • Edited on Oct 10, 2024 How to download Google Docs as a PDF directly f...
    
    ](https://dev.to/dinesh-se/download-google-docs-as-a-pdf-from-the-shared-link-53l0?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K: Introduction to Embedded Systems
    
    2023年8月31日 — ECE319K: Introduction to Embedded Systems, Fall 2023 (Aug. 31, 2023 version) Email all professors and TAs (f23_ee319k@utlists.utexas.edu) Embedded systems; machine language execution; assembly and...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319KF23.html?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://community.element14.com&sz=32)
    
    element14.com
    
    TI Robotic Systems Learning Kit (TI-RSLK) - Review - element14 Community
    
    2018年8月6日 — TI Robotic Systems Learning Kit (TI-RSLK) - Review - element14 Community Scoring Total Score Product Performed to Expectations Specifications were sufficient to design with Demo Software was of goo...
    
    ](https://community.element14.com/products/roadtest/rv/roadtest_reviews/368/ti-robotic-systems-learning-kit-ti-rslk-review?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    ECE319K Introduction to Embedded Systems Instructions for setting up the lab system (MSPM0 version) CCS Install Directions How to unbrick the MSPM0G3507 by forcing BSL (bootstrap loader) with physi...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/downloads.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    ECE319K Introduction to Embedded Systems MSPM0G3507 Reference material Link Description CortexM0plus.pdf Appendix 3 MSPM0+ Assembly Reference Arm_Architecture_v6m_Reference_Manual.pdf MSPM0+ Assemb...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/datasheets.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K/ECE319H: Introduction to Embedded Systems
    
    ECE319K/ECE319H: Introduction to Embedded Systems ECE319K/ECE319H Introduction to Embedded Systems, Spring 2026 Email all professors and TAs (ece319kstaff@utlists.utexas.edu) Course Catalog Descrip...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319KSp26.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Embedded Systems: Real-Time Interfacing
    
    Embedded Systems: Real-Time Interfacing Jonathan Valvano and Ramesh Yerraballi This is the first of three books on embedded systems. This Volume 1 is an Introduction to Embedded Systems covering as...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    ECE319K Introduction to Embedded Systems EE319Kkit.txt A list of components handed out to students. These parts need not be returned. SolderingGuide.pdf Soldering guide (safety and tips) Labs and t...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/labs.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE_319K_Exam_Review_Outline
    
    ECE_319K_Exam_Review_Outline Updated 2/8/2026 Lab 1 Assembly language, arrays, functions LDR(S/H/B), STR(S/H/B), EORS, ANDS, ORRS, BICS, different branches 2017 Fall: 1.d 2018 2a, 6 2, 7 3, 4, 9 c,...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ECE_319K_Exam_Review_Outline.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    MSPM0G3507 LaunchPad Development Kit User Guide (LP-MSPM0G3507) (Rev. A)
    
    Plug-in Module Pinout... Cortex®, Keil®, and μVision® are registered trademarks of Arm Limited. All trademarks are the property of their respective owners. 1 Getting Started 1.1 Introduction The MS...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/LP_MSPM0G3507_users_guide.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    MSPM0G350x Mixed-Signal Microcontrollers With CAN-FD Interface datasheet (Rev
    
    at 250-ksps with hardware averaging One 12-bit 1-MSPS digital-to-analog converter with integrated output buffer (DAC) Two zero-drift zero-crossover chopper op-amps (OPA) 0.5-μV/°C drift with choppi...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/mspm0g3507.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    https://users.ece.utexas.edu/~valvano/mspm0/EE319Kkit.txt
    
    ECE319K Spring 2026 TAs hand out one bag to each student during the board demo. Extra bags should be put into the Cabinet. Qty Item 1 plastic bag 2 Green LED 1.9V 10mA 5mm, Liteon LTL-4234, Mouser...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319Kkit.txt?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    MSPM0 G-Series 80-MHz Microcontrollers Technical Reference Manual
    
    2.3.3 Clock Tree...............................................................................................................................................................127 2.3.4 Clock Monito...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/MSPM0G-TRM.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Chapter 2: Introduction to Interfacing
    
    2.7. Pulse width modulation 2.8. Designing a Security System 2.9. Designing a NOT gate using a LaunchPad 2.10. On Reset 2.11. Lab 2. Hardware Interfacing of LED, Switch Video 2.0. Circuit elements...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch2_IntroToInterfacing.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Chapter 3: Introduction to C
    
    software The following video shows the editor, compiler, assembler, linker, loader and debugger Video 3.1.2. Code Composer Studio IDE showing the editor, compiler and loader There are four sections...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch3_SoftwareDesign.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Table of Contents - ECE319K
    
    Table of Contents - ECE319K Overview Textbook Sp26 Syllabus E-book Pictures of TAs Lectures Labs Quizzes Downloads Exams Data sheets C Programming PCB Camp Updated: 2/8/26
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/TOC.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Preface
    
    Preface Jonathan Valvano and Ramesh Yerraballi This is the first of three books on embedded systems. This Volume 1 is an Introduction to Embedded Systems covering assembly, C, interrupts, and simpl...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/preface.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Chapter 1: Introduction to Embedded Systems
    
    logic Embedded Software in C for an ARM Cortex M MSPM0G3507 LaunchPad Users Manual ECE319K Book appendix 3 (ECE319K book) ArmClang_Reference_Guide (ARM) ARMv6-M Architecture Reference Manual (ARM)...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch1_Introduction.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Chapter 9: Embedded System Design
    
    project be developed? Similar to the labs, this lab has starter projects: Lab10_EE319K for EE319K and Lab10_C++ for EE319H. The projects include some art and sounds to get you started. 1.3. Roles a...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch9_EmbeddedSystemDesign.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    FinalF23sol
    
    FinalF23sol UT EID:99981231160000-08'00' First: Last: Instructions: Closed book and closed notes. No books, no papers, no data sheets (other than the addendum) No devices other than pencil, pen, er...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/FinalF23sol.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Microsoft Word - Vol1_MSPM0_08_08_23.docx
    
    is the second operand, and R is the final register value. N: result is negative N = R31 Z: result is zero Z R 31 & R 30 & & R 0 V: signed overflow 31 31 31 R & M & X V | X 31 & M 31 & R 31 C: unsig...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/CortexM0plus.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Chapter 4: Finite State Machines
    
    we use struct to define a structure. The const modifier causes the structure to be allocated in ROM. Without the const, the C compiler will place the structure in RAM, allowing it to be dynamically...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch4_FiniteStateMachines.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    4D6963726F736F667420576F7264202D204578616D312D416464656E64756D
    
    4D6963726F736F667420576F7264202D204578616D312D416464656E64756D Memory access and register move instructions LDR Rt, [Rn] // 32-bit load, EA=Rn LDR Rt, [Rn,#n5] // 32-bit load, EA=Rn+n5 LDR Rt, [SP,...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/Exam1-Addendum.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    ECE319K Introduction to Embedded Systems Exam 1 Addendum used in Exam1: Addendum1 Topics include Memory access - Read/write to global RAM space - 8/16/32 bits - Signed and unsigned Registers and st...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/exams.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    ECE319K Introduction to Embedded Systems Lectures will be updated to reflect the pace and coverage in class. PowerPoint lectures written by Professors Ramesh Yerraballi, Al Cuevas, Andreas Gerstlau...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/lectures.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K/ECE319H: Introduction to Embedded Systems
    
    ECE319K/ECE319H: Introduction to Embedded Systems ECE319K Introduction to Embedded Systems, Fall 2025 (See Canvas for most up to date office hours) Course Catalog Description Embedded systems; mach...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319KF25.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    https://users.ece.utexas.edu/~valvano/mspm0/Exam1F22.docx
    
    EE319K Fall 2022 Exam1 ECE319K Fall 2022 Exam1, Modified for the MSPM0G3507 Jonathan Valvano Exam1 October 6, 2022Page 1 of 6 Jonathan Valvano Exam1 October 6, 2022 Page 1 of 8 UT EID: First:Last:...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/Exam1F22.docx?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Quizzes - ECE319K
    
    Quizzes - ECE319K ECE319K quizzes are administered weekly on Canvas. Typically, the scope of each quiz includes the material from the previous week: Book readings, Lab assignment, Lectures, and Lec...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/quizzes.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K/ECE319H: Introduction to Embedded Systems
    
    the software, computer, and electrical engineering worlds. Electrical engineering concepts include Ohms Law, LED voltage/current, resistance measurement, and stepper motor control. Software enginee...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/EE319KSp25.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    ECE319K Introduction to Embedded Systems Resources for C programming C Book for specifics on programming for a ARM Cortex M micro-controller Patt and Patel Introduction to Computing Systems: From B...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/CProg.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Embedded Systems: Real-Time Interfacing
    
    Embedded Systems: Real-Time Interfacing Jonathan Valvano and Ramesh Yerraballi This is the first of three books on embedded systems. This Volume 1 is an Introduction to Embedded Systems covering as...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/index.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Sp25_EE319K_FinalExam-Sol
    
    Sp25_EE319K_FinalExam-Sol Final Exam Date: May 2, 2025 UT EID: _____________________ Printed Name: __________________________________________________________ Last, First Your signature is your prom...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/FinalS25sol.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Chapter 6: Local variables and LCD output
    
    C to assembly 6.5. Serial Peripheral Interface (SPI) 6.6. ST7735R Interfacing 6.7. Fixed-point Numbers 6.8. Floating-point Numbers 6.9. Numerical Output 6.10. printf 6.11. Lab 6. LCD Device Driver...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch6_LocalVariables.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    F25_EE319K_Exam1-Solution
    
    F25_EE319K_Exam1-Solution Exam 1 Date: October 2, 2025 UT EID: _____________________ Printed Name: ________________________________________________________ Last, First Your signature is your promis...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/Exam1F25sol.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    https://users.ece.utexas.edu/~valvano/mspm0/ECE_319K_Exam_Review_Outline.docx
    
    Lab 1 Assembly language, arrays, functions LDR(S/H/B), STR(S/H/B), EOR, AND, ORR, BIC, different branches 2017 Fall: 1.d 2018 Fall: 2a, 6 2019 Spring: 2, 7 2019 Fall: 3, 4, 9 2020 Spring: 1.c, 1.d,...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ECE_319K_Exam_Review_Outline.docx?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    FinalExamSp24sol
    
    FinalExamSp24sol UT EID: First: Last: Instructions: Closed book and closed notes. No books, no papers, no data sheets (other than the addendum) No devices other than pencil, pen, eraser (no calcula...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/FinalS24sol.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Chapter 5: Interrupts, DAC, and Sound Generation
    
    bits within those devices from which interrupts are not to be allowed. In other words it uses the arm bits to individually select which devices will and which devices will not request interrupts. F...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/Ch5_DACSound.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE445L
    
    ECE445L Table of Contents Preface 1. Introduction 2. Switches/LEDs 3. C Programming 4. Finite State Machines 5. Interrupts/DAC/Sound 6. Locals/LCD 7. ADC/Sampling 8. Communication 9. System Design...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/toc.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    FinalExamF23
    
    FinalExamF23 UT EID: First: Last: Instructions: Closed book and closed notes. No books, no papers, no data sheets (other than the addendum) No devices other than pencil, pen, eraser (no calculators...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/FinalF23.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Sp25_EE319K_Exam1
    
    Sp25_EE319K_Exam1 Exam 1 Date: February 20, 2025 UT EID: _____________________ Printed Name: ____________________________________________________________ Last, First Your signature is your promise...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/Exam1S25.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    https://users.ece.utexas.edu/~valvano/mspm0/Exam1S20.docx
    
    UT-EID:___________________ EE319K Spring 2020 Exam 1 Feb 28, 2020 7:00pm-8:15pmPage 1 EE319K Spring 2020 Exam 1 Feb 28, 2020 7:00pm-8:15pmPage 7 Exam 1, Modified for the MSPM0G3507 Date: Feb 28, 20...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/Exam1S20.docx?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE445M: EMBEDDED AND REAL-TIME OPERATING SYSTEMS
    
    ECE445M: EMBEDDED AND REAL-TIME OPERATING SYSTEMS Reference material Coding Guides C programming guidelines: style.pdf Good header and code file syntax: c_and_h_files.pdf Automatically generate sof...
    
    ](https://users.ece.utexas.edu/~valvano/EE445M/resources.html?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Downloads
    
    Downloads Table of Contents Keil Installation CCS 12 Installation LaunchPad driver Installation Example TM4C123 projects How to do important tasks KiCad information for drawing circuits and making...
    
    ](https://users.ece.utexas.edu/~valvano/EE445L/downloads.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    C Reference Card (ANSI) Constants Flow of Control Program Structure/Functions
    
    C Reference Card (ANSI) Constants Flow of Control Program Structure/Functions C Reference Card (ANSI) Program Structure/Functions type fnc(type1,:::) type name main() { declarations function declar...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/c-refcard.pdf?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    Assembly Reference
    
    ; load 32-bit number at [Rn] to Rd LDRH Rd, [Rn] ; load unsigned 16-bit at [Rn] to Rd LDRSH Rd, [Rn] ; load signed 16-bit at [Rn] to Rd LDRB Rd, [Rn] ; load unsigned 8-bit at [Rn] to Rd LDRSB Rd, [...
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/AssemblyReference.htm?utm_source=chatgpt.com)
- [
    
    utexas.edu
    
    ECE319K Introduction to Embedded Systems
    
    ECE319K Introduction to Embedded Systems Introduction to Embedded Systems Using the MSPM0+, ISBN: 979-8852536594 (1st edition, 4th printing, August 2024), Jonathan Valvano
    
    ](https://users.ece.utexas.edu/~valvano/mspm0/ebook/top.htm?utm_source=chatgpt.com)
- [
    
    google.com
    
    Google Docs: Sign-in
    
    Google Docs: Sign-in Sign in to continue to Google Docs Email or phone Forgot email? Not your computer? Use a private browsing window to sign in. Learn more about using Guest mode Create account En...
    
    ](https://docs.google.com/document/?utm_source=chatgpt.com)
- [
    
    google.com
    
    Google Docs: Sign-in
    
    Google Docs: Sign-in Sign in to continue to Google Docs Email or phone Forgot email? Not your computer? Use a private browsing window to sign in. Learn more about using Guest mode Create account En...
    
    ](https://docs.google.com/document/?usp+=+direct_url&utm_source=chatgpt.com)
- [
    
    google.com
    
    Google Docs: Sign-in
    
    Google Docs: Sign-in Sign in to continue to Google Docs Email or phone Forgot email? Not your computer? Use a private browsing window to sign in. Learn more about using Guest mode Create account En...
    
    ](https://docs.google.com/document/?pli=1&utm_source=chatgpt.com)
- [
    
    google.com
    
    Google ドキュメント: ログイン
    
    Google ドキュメント: ログイン ログイン Google ドキュメントに移動 メールアドレスまたは電話番号 メールアドレスを忘れた場合 ご自分のパソコンでない場合は、シークレット ブラウジング ウィンドウを使用してログインしてください。 ゲストモードの使い方の詳細 次へ アカウントを作成 日本語 ヘルプ プライバシー 規約 Google ドキュメントには、個人の Google アカウン...
    
    ](https://docs.google.com/document/?hl=ja&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://support.google.com&sz=32)
    
    google.com
    
    Export your data from Google Docs, Sheets, Slides, Drawings, Sites, Drive, Forms & Vids - Google Docs Editors Help
    
    Export your data from Google Docs, Sheets, Slides, Drawings, Sites, Drive, Forms & Vids - Google Docs Editors Help Help Center Community Gemini in Docs Editors Google Docs Editors Export your data...
    
    ](https://support.google.com/docs/answer/9759608?hl=en&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://docs.google.com&sz=32)
    
    google.com
    
    Sign in - Google Accounts
    
    Sign in - Google Accounts Sign in Use your Google Account Email or phone Forgot email? Not your computer? Use a private browsing window to sign in. Learn more about using Guest mode Next Create acc...
    
    ](https://docs.google.com/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://support.google.com&sz=32)
    
    google.com
    
    Download a file - Computer - Google Drive Help
    
    Download a file - Computer - Google Drive Help Help Center Community Find, delete, and recover files Google Drive Download a file Download files from Google Drive with a computer, Android, or iOS d...
    
    ](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en-en&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://support.google.com&sz=32)
    
    google.com
    
    ファイルをダウンロードする - パソコン - Google ドライブ ヘルプ
    
    ファイルをダウンロードする - パソコン - Google ドライブ ヘルプ ヘルプ センター ファイルの検索、削除、復元 Google ドライブ ファイルをダウンロードする パソコン、Android デバイス、iOS デバイスで、Google ドライブからファイルをダウンロードします。 重要: 不審なファイルをダウンロードしようとすると、警告メッセージが表示されることがあります。そのような...
    
    ](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=ja&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://support.google.com&sz=32)
    
    google.com
    
    Download a file - Computer - Google Drive Help
    
    Download a file - Computer - Google Drive Help Help Center Community Find, delete, and recover files Google Drive Download a file Download files from Google Drive with a computer, Android, or iOS d...
    
    ](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://support.google.com&sz=32)
    
    google.com
    
    View & open files - Google Drive Help
    
    View & open files - Google Drive Help Help Center Community Find, delete, and recover files Google Drive Find items in Google Drive Images, videos, and other file types View & open files View & ope...
    
    ](https://support.google.com/drive/answer/2423485?hl=en&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://support.google.com&sz=32)
    
    google.com
    
    导出 Google 文档、表格、幻灯片、绘图、协作平台、云端硬盘、表单和 Vids 中的数据 - Google 文档编辑器帮助
    
    导出 Google 文档、表格、幻灯片、绘图、协作平台、云端硬盘、表单和 Vids 中的数据 - Google 文档编辑器帮助 导出 Google 文档、表格、幻灯片、绘图、协作平台、云端硬盘、表单和 Vids 中的数据 您可以导出和下载 Google 云端硬盘中的数据,包括 Google 文档、表格、幻灯片、绘图、协作平台、云端硬盘、表单和 Vids 中的内容。您还可以创建一份归档文件,以...
    
    ](https://support.google.com/docs/answer/9759608?hl=zh-Hans&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://support.google.com&sz=32)
    
    google.com
    
    ファイルを表示する、開く - Google ドライブ ヘルプ
    
    ファイルを表示する、開く - Google ドライブ ヘルプ ヘルプ センター ファイルの検索、削除、復元 Google ドライブ Google ドライブでアイテムを見つける 画像、動画、その他の種類のファイル ファイルを表示する、開く ファイルを表示する、開く ウェブ上の Google ドライブ では、動画、PDF、Microsoft Office ファイル、音声ファイル、写真などのアイテ...
    
    ](https://support.google.com/drive/answer/2423485?hl=ja&utm_source=chatgpt.com)
- [
    
    ti.com
    
    3.4.4. Code Composer Studio — Processor SDK Linux for AM335X Documentation
    
    the SDK install and want to install it now, you can install CCS using the following commands: Open a Linux terminal and change directory to the location where the CCS tarball is located. This may b...
    
    ](https://software-dl.ti.com/processor-sdk-linux/esd/docs/latest/linux/Foundational_Components/Tools/Code_Composer_Studio.html?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com&sz=32)
    
    ti.com
    
    MSPM0 MCUs Development Guide (Rev
    
    MSPM0 Online Selection This step discusses how to find an MSPM0 orderable number. Visit the Arm Cortex-M0+ MCUs product page to view the list of MSPM0 devices. After navigating to this page, use th...
    
    ](https://www.ti.com/lit/ug/slaaed1g/slaaed1g.pdf?utm_source=chatgpt.com)
- [
    
    ti.com
    
    MSPM0 Fundamentals Workshop for CCS Theia
    
    MSPM0 Fundamentals Workshop for CCS Theia Overview This workshop provides an introduction to the Code Composer Studio Theia integrated development environment. It will cover how to get started usin...
    
    ](https://software-dl.ti.com/ccs/esd/training/workshop/ccs_theia/ccs_mspm0_fundamentals_workshop.html?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com&sz=32)
    
    ti.com
    
    MSPM0 MCUs Development Guide (Rev
    
    MSPM0 Online Selection This step discusses how to find an MSPM0 orderable number. Visit the Arm Cortex-M0+ MCUs product page to view the list of MSPM0 devices. After navigating to this page, use th...
    
    ](https://www.ti.com/lit/ug/slaaed1g/slaaed1g.pdf?ts=1782973623158&utm_source=chatgpt.com)
- [
    
    ti.com
    
    3.4.4. Code Composer Studio — Processor SDK Linux for J721e Documentation
    
    installer, or if you decided not to install it as part of the SDK install and want to install it now, you can install CCS using the following commands: Open a Linux terminal and change directory to...
    
    ](https://software-dl.ti.com/jacinto7/esd/processor-sdk-linux-jacinto7/08_01_00_07/exports/docs/linux/Foundational_Components/Tools/Code_Composer_Studio.html?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com&sz=32)
    
    ti.com
    
    MSPM0 MCUs Development Guide (Rev. G)
    
    MSPM0 MCUs Development Guide (Rev. G) User's Guide MSPM0 MCUs Development Guide ABSTRACT This document is a good resource for finding important information about MSPM0TMmicrocontrollers (MCUs). Thi...
    
    ](https://www.ti.com/lit/an/slaaed1b/slaaed1b.pdf?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://dev.ti.com&sz=32)
    
    ti.com
    
    Overview — MSPM0 Academy
    
    Overview — MSPM0 Academy MSPM0 Academy Welcome to MSPM0 Academy - a great starting point for all developers to learn about the MSPM0 MCU Platform which provides affordable solutions for all applica...
    
    ](https://dev.ti.com/tirex/explore/node?node=A__AIeATtU8BJIvwb73IOPaMw__MSPM0-ACADEMY__2f1Egw1__LATEST&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com&sz=32)
    
    ti.com
    
    MSPM0G3507 LaunchPad Development Kit User's Guide (LP-MSPM0G3507) (Rev
    
    protection unit and frequency up to 80MHz. The... ... 7-channel DMA, math accelerator, and a variety of high-performance analog peripherals such as two 12-bit 4-Msps ADCs, a configurable internal s...
    
    ](https://www.ti.com/lit/slau873?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com&sz=32)
    
    ti.com
    
    MSPM0 L-Series 32-MHz Microcontrollers Technical Reference Manual (Rev. F)
    
    Muxes..................................................................................................................................... 2.2.6 Peripheral Enable......................................
    
    ](https://www.ti.com/lit/ug/slau847d/slau847d.pdf?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com&sz=32)
    
    ti.com
    
    MSPM0 MCUs Quick Reference Guide (Rev. B)
    
    2.4 Hardware Tools and EVMs............................................................................................................................................... 3 MSPM0 Application Resour...
    
    ](https://www.ti.com/lit/an/slaae70b/slaae70b.pdf?ts=1783223657024&utm_source=chatgpt.com)
- [
    
    ti.com
    
    MSPM0 Design Flow Guide (Rev. D)
    
    MSPM0 Design Flow Guide (Rev. D) Application Note MSPM0 Design Flow Guide Eason Zhou, Zoey Wei, Helic Chi, and Janz Bai ABSTRACT The application note details steps on how to develop MSPM0 MCUs. Rel...
    
    ](https://e2e.ti.com/cfs-file/__key/communityserver-discussions-components-files/908/1425.MSPM0-Design-Flow-Guide.pdf?utm_source=chatgpt.com)
- [
    
    github.com
    
    GitHub - ECE445L-Archive/Lab9-MQTT-RSLK2-FA24 · GitHub
    
    GitHub - ECE445L-Archive/Lab9-MQTT-RSLK2-FA24 · GitHub Uh oh! ECE445L-Archive / Lab9-MQTT-RSLK2-FA24 Public archive ECE445L-Archive/Lab9-MQTT-RSLK2-FA24 main BranchesTags Go to file Code Folders an...
    
    ](https://github.com/ECE445L-Archive/Lab9-MQTT-RSLK2-FA24?utm_source=chatgpt.com)
- [
    
    github.com
    
    IEEE-PCB-Workshop-Spring-2026/Week02 at main · IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026 · GitHub
    
    IEEE-PCB-Workshop-Spring-2026/Week02 at main · IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026 · GitHub IEEE-U-of-U / IEEE-PCB-Workshop-Spring-2026 Public Notifications You must be signed in to change no...
    
    ](https://github.com/IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026/tree/main/Week02?utm_source=chatgpt.com)
- [
    
    github.com
    
    GitHub - ECE445L-Archive/Lab9-SP24 · GitHub
    
    GitHub - ECE445L-Archive/Lab9-SP24 · GitHub ECE445L-Archive / Lab9-SP24 Public template Notifications Fork 0 Star 0 main Cannot retrieve latest commit at this time. 31 Commits hw @ f4c1bac resource...
    
    ](https://github.com/ECE445L-Archive/Lab9-SP24?utm_source=chatgpt.com)
- [
    
    github.com
    
    GitHub - pilerks1/ECE-445L-Final-Project: forked from ece445l_spring_2025-ece-445l-lab-7-and-10 · GitHub
    
    GitHub - pilerks1/ECE-445L-Final-Project: forked from ece445l_spring_2025-ece-445l-lab-7-and-10 · GitHub pilerks1 / ECE-445L-Final-Project Public Notifications You must be signed in to change notif...
    
    ](https://github.com/pilerks1/ECE-445L-Final-Project?utm_source=chatgpt.com)
- [
    
    github.com
    
    ee445m-cmake-lab-template/README.md at main · benmarsan/ee445m-cmake-lab-template · GitHub
    
    </form> ee445m-cmake-lab-template/README.md at main · benmarsan/ee445m-cmake-lab-template · GitHub benmarsan / ee445m-cmake-lab-template Public template Notifications Fork 0 Star 0 main ee445m-cmak...
    
    ](https://github.com/benmarsan/ee445m-cmake-lab-template/blob/main/README.md?utm_source=chatgpt.com)
- [
    
    github.com
    
    IEEE-PCB-Workshop-Spring-2026/Master Design Reference Files/Altium_Component_Library at main · IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026 · GitHub
    
    IEEE-PCB-Workshop-Spring-2026/Master Design Reference Files/Altium_Component_Library at main · IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026 · GitHub IEEE-U-of-U / IEEE-PCB-Workshop-Spring-2026 Public...
    
    ](https://github.com/IEEE-U-of-U/IEEE-PCB-Workshop-Spring-2026/tree/main/Master%20Design%20Reference%20Files/Altium_Component_Library?utm_source=chatgpt.com)
- [
    
    github.com
    
    GitHub - ECE445L-Classroom/lab-1-nateether: ece445l_fall_2025-lab-1-ECE445L-Lab1 created by GitHub Classroom
    
    GitHub - ECE445L-Classroom/lab-1-nateether: ece445l_fall_2025-lab-1-ECE445L-Lab1 created by GitHub Classroom ECE445L-Classroom / lab-1-nateether Public ECE445L-Classroom/ece445l_fall_2025-lab-1-ECE...
    
    ](https://github.com/ECE445L-Classroom/lab-1-nateether?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.ti.com.cn&sz=32)
    
    ti.com.cn
    
    RSLK MAX building the robot introduction curriculum
    
    RSLK MAX building the robot introduction curriculum Texas Instruments Robotics System Learning Kit Module 5 Introduction: Building the robot Introduction: Building the robot Educational Objectives:...
    
    ](https://www.ti.com.cn/cn/lit/pdf/sekp084?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://ape.berkie.ee&sz=32)
    
    berkie.ee
    
    Course Info | APE SP26
    
    Course Info | APE SP26 Course Info APE introduces advanced printed circuit board (PCB) design and layout, with a focus on more complex considerations and more nuanced experience with standard tools...
    
    ](https://ape.berkie.ee/course-info/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://automationace.com&sz=32)
    
    automationace.com
    
    How to Export a PDF from Google Docs, Sheets, or Slides via Google Drive | Automation Ace
    
    ](https://automationace.com/blog/google-drive-export-pdf-docs-sheets-slides?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.coherent.com&sz=32)
    
    coherent.com
    
    RLSK | Coherent
    
    RLSK | Coherent Home > Laser Components and Accessories > Processing Heads > RLSK Laser Components and Accessories RLSK Execute even the most complex weld paths using this 3D remote laser welding h...
    
    ](https://www.coherent.com/components-accessories/processing-heads/rlsk?utm_source=chatgpt.com)
- [
    
    guidetopharmacology.org
    
    ribosomal protein S6 kinase like 1 | RSKL family | IUPHAR/BPS Guide to PHARMACOLOGY
    
    ](https://www.guidetopharmacology.org/GRAC/ObjectDisplayForward?objectId=1533&utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://itp.nyu.edu&sz=32)
    
    nyu.edu
    
    Session - PCBs Making: Design And Order A PCB With KiCAD! - ITP Camp 2026
    
    Session - PCBs Making: Design And Order A PCB With KiCAD! - ITP Camp 2026 PCBs Making: Design And Order A PCB With KiCAD! Date: June 10, 2026 6-7:30pm Session Leaders: Ben Anderman Format: Hybrid (...
    
    ](https://itp.nyu.edu/camp/2026/session/145?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.valvulinox.com&sz=32)
    
    valvulinox.com
    
    db_RSK_gb
    
    db_RSK_gb GEMÜ RSK Plastic check valve Features Weight and space-saving construction Short length Simple construction Option with return spring Description GEMÜ RSK is a plastic check valve with in...
    
    ](https://www.valvulinox.com/wp-content/uploads/2021/01/db_RSK_gb.pdf?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://courses.grainger.illinois.edu&sz=32)
    
    illinois.edu
    
    Lecture_1
    
    Lecture_1 PCB Assignment PCB CAD and Soldering Assignment The CAD and Soldering assignment is structured to teach PCB design and soldering Essential skills for success in this course You will use K...
    
    ](https://courses.grainger.illinois.edu/ece445/lectures/SP_26_Lectures/Lecture_1_2.pdf?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://embeddedcomputing.weebly.com&sz=32)
    
    weebly.com
    
    Systems Thinking with Texas Instruments Robotics System Learning Kit - Embedded Computing
    
    Systems Thinking with Texas Instruments Robotics System Learning Kit - Embedded Computing Systems Thinking with Texas Instruments Robotics System Learning Kit After the huge success of the two prev...
    
    ](https://embeddedcomputing.weebly.com/systems-thinking-with-texas-instruments-robotics-system-learning-kit.html?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://efi.mit.edu&sz=32)
    
    mit.edu
    
    6.900 Spring 2026
    
    avail (typically products with more avail are more popular, which means they're probably pretty good). We've chosen the TPS62A01 from this list. It's adjustable,and it's super cheap, at less than $...
    
    ](https://efi.mit.edu/spring26/ex02/buck_schematic?utm_source=chatgpt.com)
- [
    
    itube.or.kr
    
    SOFTWARE MANUAL RLSK Studio 2D Software
    
    active. TheService Levelwindow also remains deactivated. Programming LevelThe user can create and edit projects in the soft- ware. This data can also be sent to the laser proces- sing head. Data fr...
    
    ](https://itube.or.kr/center/C000000021/equipment/manual/download?file_no=EPF0053940&utm_source=chatgpt.com)
- [
    
    techexplorations.com
    
    PCBWay's 2026 KiCad PCB design contest: From concept to creation - Tech Explorations
    
    ](https://techexplorations.com/blog/news/pcbway-2026-kicad-pcb-design-contest-from-concept-to-creation/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.euro-valve.com&sz=32)
    
    euro-valve.com
    
    https://www.euro-valve.com/wp-content/uploads/2020/06/spatna-klapka-rsk-gemu.pdf
    
    Construction The GEMÜ RSK wafer type check valve is available in plastic and the body, disc and seal can be chosen from various materials. The valve is clamped between two flanges and has a flange...
    
    ](https://www.euro-valve.com/wp-content/uploads/2020/06/spatna-klapka-rsk-gemu.pdf?utm_source=chatgpt.com)
- [
    
    elec327.github.io
    
    Lab 1
    
    Lab 1 Lab #1: Intro C Programming (100 pts) There are three goals for this assignment: To get a taste for writing embedded code in the C programming language. To build a mental understanding for ho...
    
    ](https://elec327.github.io/lab1/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://cpb-us-w2.wpmucdn.com&sz=32)
    
    cpb-us-w2.wpmucdn.com
    
    Code Composer Studio
    
    Driverlib, select the down arrow ∨ and SCROLL DOWN AGAIN. Highlight: Empty Project with DriverLib Source Select Finish Project Set-up "Voilà" Project Set-up ALTERNATIVELY: If you are beginning with...
    
    ](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/c/56808/files/2019/09/ECE-3567-Lecture-3-Autumn-2019.pdf?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://jiep.or.jp&sz=32)
    
    jiep.or.jp
    
    プログラム | 第40回エレクトロニクス実装学会春季講演大会
    
    プログラム | 第40回エレクトロニクス実装学会春季講演大会 HOME / プログラム 2026年3月10日 2026年3月11日 2026年3月12日 所属名は法人にて統合しております 2026年3月10日(火) A会場(3階第3会議室) B会場(3階第1会議室) C会場(3階第2会議室) D会場(3階第4会議室) 10:00 10A1 回路・実装設計技術&高速高周波・電磁特性技術1 座長...
    
    ](https://jiep.or.jp/event/convention/jiep2026s/program/?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://link.springer.com&sz=32)
    
    springer.com
    
    Rice receptor-like kinase OsSI-RLK2 inhibits internode elongation
    
    ](https://link.springer.com/content/pdf/10.1007/s11434-007-0413-8.pdf?utm_source=chatgpt.com)
- [
    
    ![](https://www.google.com/s2/favicons?domain=https://www.manualslib.com&sz=32)
    
    manualslib.com
    
    TEXAS INSTRUMENTS TI-RSLK MAX MANUAL Pdf Download | ManualsLib
    
    TEXAS INSTRUMENTS TI-RSLK MAX MANUAL Pdf Download | ManualsLib Manuals Brands Texas Instruments Manuals Robotics TI-RSLK Manual Texas Instruments TI-RSLK MAX M
    
    ](https://www.manualslib.com/manual/1982714/Texas-Instruments-Ti-Rslk-Max.html?utm_source=chatgpt.com)



1