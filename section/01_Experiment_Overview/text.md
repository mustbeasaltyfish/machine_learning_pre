# Section 01: 实验概述 (Experiment Overview)

## 页面配置 (Global Config)
- **背景风格**: 极简白色背景，带有微弱的 `--gradient-gemini-bg` 渐变。
- **布局模式**: 左右分栏 (Left: Text, Right: Tech Badge Cluster)。

---

## 标题 (Title)
# 机器学习实验汇报：特征提取与模型生成
<!-- 动画: { "type": "reveal", "duration": 800, "delay": 0 } -->

## 副标题 (Subtitle)
基于 MindSpore 框架的 SimCLR 与 VAE 算法复现
<!-- 动画: { "type": "fade-up", "duration": 600, "delay": 300 } -->

---

## 核心任务 (Core Tasks)

### 任务一：SimCLR 自监督学习复现
- **目标**: 通过对比学习（Contrastive Learning）训练高质量特征编码器。
- **核心**: 利用强数据增强生成正样本对，通过 **NT-Xent** 损失函数最大化一致性。
- **技术要点**: ResNet 变体、GroupNorm、投影头 (MLP)。
<!-- 动画: { "type": "stagger-fade", "interval": 100, "delay": 500 } -->

### 任务二：VAE 变分自编码器复现
- **目标**: 构建生成模型，学习 CIFAR 数据集的连续潜在空间。
- **核心**: 结合重参数化技巧（Reparameterization）与 KL 散度约束实现图像重构与采样生成。
- **技术要点**: 4层卷积架构、BatchNorm、KL Annealing 策略。
<!-- 动画: { "type": "stagger-fade", "interval": 100, "delay": 700 } -->

---

## 实验环境与资源 (Environment)
- **框架**: Huawei MindSpore 2.2.0 (PyNative Mode)
- **硬件**: Ascend 910 AI 处理器
- **数据集**: CIFAR-10 (60,000 images, 10 classes)
<!-- 动画: { "type": "pop-in", "duration": 500, "delay": 1000 } -->

---

## 团队贡献 (Collaborators)
- **zym**: 整体框架与可视化体系
- **wyk**: 编码器架构与优化策略
- **tzr**: 算法原理深度推导
- **pwc**: 数据策略与指标分析
<!-- 样式: 胶囊型标签 (Pill Labels), 底部横向排列 -->