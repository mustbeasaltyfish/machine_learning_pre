# Section 02: 关键模型架构 (Detailed Slides)

---

## [PAGE 1]: 架构总览：双模型并行
### 页面配置
- **布局**: 对称双卡片
- **动画**: 页面入场时两张卡片左右浮现 `{ "type": "slide-in-side", "offset": 100 }`

### 内容
- **SimCLR 结构**: 
  - 任务：自监督一致性学习。
  - 组件：ResNet-Based Encoder + MLP Projection Head。
- **VAE 结构**:
  - 任务：潜在空间采样生成。
  - 组件：Conv Encoder + Deconv Decoder + Reparameterization Layer。

---

## [PAGE 2]: SimCLR 编码器：适配小 Batch 的 GroupNorm
### 页面配置
- **重点**: GroupNorm 的代码实现。
- **字体**: 代码使用 `Roboto Mono`, 400 Weight。

### 内容说明
- **设计逻辑**: CIFAR 数据集小，训练时 `BatchSize=32` 会导致 `BatchNorm` 的均值/方差计算剧烈抖动。
- **代码段**:
```python
# 文件: simclr_encoder.py
# 关键行: nn.GroupNorm(8, 64)
# 动画: 
# 1. 鼠标选中效果: 自动划过 "GroupNorm(8, 64)" 并改变其颜色至亮蓝色
# 2. 悬浮卡片: 整个代码块在讲解时轻微放大 + 呼吸灯阴影效果
```
- **简介**: 将 64 个通道分为 8 组，每组 8 个通道。组内计算矩，使归一化结果与 Batch 维度解耦。

---

## [PAGE 3]: SimCLR 投影头：特征空间的非线性转换
### 页面配置
- **重点**: MLP 层级结构。
- **颜色**: 使用 Gemini Blue 高亮关键类名。

### 内容说明
- **设计逻辑**: 编码器提取的是语义特征，而对比学习需要一个紧凑的嵌入空间。实验证明，加入非线性投影头能大幅提升提取特征的鲁棒性。
- **代码段**:
```python
# 文件: simclr_projection.py
# 动画: 
# 1. 第4-9行 [self.net = ...] 依次淡入展示逻辑层级
# 2. 关键词 "LayerNorm" 底部划线动画展示其位置
```
- **简介**: 采用两层 MLP 结构，并辅以 `LayerNorm` 进行层级归一化，将 256 维特征压缩至 128 维。

---

## [PAGE 4]: VAE 核心：重参数化 (Reparameterization Trick)
### 页面配置
- **重点**: 采样逻辑的可微化处理。
- **视觉**: 代码与数学公式左右对照。

### 内容说明
- **数学逻辑**: $z = \mu + \sigma \odot \epsilon$。
- **代码段**:
```python
# 文件: vae_reparam.py
# 动画: 
# 1. 模拟“手动选中”: 一段半透明的高亮框盖在 [mu + eps * std] 上并持续放大
# 2. 关键词 "standard_normal" 缓慢呼吸灯效果，强调噪声注入
```
- **简介**: 采样是随机过程，无法求导。通过将 $\epsilon$（标准正态噪声）与 $\mu, \sigma$ 分离，使得梯度可以绕过随机性流向 Encoder。
