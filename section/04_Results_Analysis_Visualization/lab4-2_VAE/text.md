# Lab 4-2: VAE 结果分析

## 核心指标
- **训练轮数**: 60 Epochs
- **Loss 构成**: Reconstruction Loss (BCE) + KL Divergence
- **生成质量**: 潜在空间插值平滑，重构图基本保留原始轮廓

## 可视化建议
- **图表 1**: 重构图对比 (vae_reconstruction.png)
- **图表 2**: 生成样本展示 (vae_generated.png)
- **图表 3**: 潜在空间插值 (vae_interpolation.png)

---
## 页面规划 (Slide 13-14)
### Slide 13: 图像重构性能
- 展示 Input vs Reconstructed 对比卡片。
### Slide 14: 生成与潜在空间
- 展示从随机正态分布采样的生成结果及其 t-SNE。
