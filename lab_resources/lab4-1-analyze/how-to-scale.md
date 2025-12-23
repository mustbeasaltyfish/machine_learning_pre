好的，我来帮你合并代码。首先让我读取需要合并的关键代码部分：

[4 tools called]

由于文件较大，我将直接创建合并后的两个实验文件。让我为你创建：

[1 tool called]

让我创建两个完整的合并后的实验文件：

[2 tools called]

我已经为你创建了两个合并后的实验文件：

---

## ✅ 已创建的文件

| 文件       | 位置                                    |
| ---------- | --------------------------------------- |
| **SimCLR** | `第四次实验\submit\Lab4-1-merged.ipynb` |

---

## 📝 合并内容说明

### Lab4-1-merged.ipynb (SimCLR)

整合了以下各人贡献：
- **zym**: 整体框架结构、模块化设计、数据增强可视化、t-SNE可视化
- **wyk**: **CNN编码器架构**（4层卷积+GroupNorm）
- **tzr**: 注释中的算法原理说明
- **pwc**: 数据增强策略参考

主要改进：
✅ 使用CNN编码器替代MLP（特征提取更强）
✅ 完整的数据增强可视化
✅ t-SNE特征可视化
✅ 相似度分布可视化

---

## 🚀 如何进一步完善实验结果

### 1. 增加训练数据和轮数

```python
# SimCLR
subset_train = 5000   # 从1000增加到5000
num_epochs = 100      # 从50增加到100

```

### 2. 调整超参数

```python
# SimCLR - 尝试不同的温度
temperature = 0.1  # 或 0.07（原论文使用）

```

### 3. 添加下游任务评估（SimCLR）

```python
# 使用学到的特征训练线性分类器
from sklearn.linear_model import LogisticRegression

# 提取特征
features = extract_features(model, train_images)
test_features = extract_features(model, test_images)

# 训练线性分类器
clf = LogisticRegression(max_iter=1000)
clf.fit(features, train_labels)

# 评估
accuracy = clf.score(test_features, test_labels)
print(f"Linear Evaluation Accuracy: {accuracy:.4f}")
```


### 5. 运行前检查

在华为云ModelArts上运行时，确保：
1. 选择 **MindSpore** 内核
2. 数据路径 `./dataset/cifar-10-batches-py` 正确
3. 设备设置为 `Ascend`

---

## 📊 预期实验结果

| 实验   | 指标                | 预期范围    |
| ------ | ------------------- | ----------- |
| SimCLR | NT-Xent Loss (最终) | 1.5 - 3.0   |
| SimCLR | 正样本相似度        | 0.7 - 0.9   |
| SimCLR | 负样本相似度        | -0.1 - 0.3  |

---

需要我帮你进行其他修改或补充吗？