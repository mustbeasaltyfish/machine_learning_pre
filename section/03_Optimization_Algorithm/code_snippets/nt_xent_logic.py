def nt_xent_loss(z1, z2, temperature=0.5):
    # 计算余弦相似度矩阵
    similarity = ops.matmul(z, z.T) / temperature
    # 屏蔽对角线（自相似项）
    logits = similarity - 1e9 * ops.eye(2 * batch_size)
    # 计算交叉熵，最大化正样本对相似度
    loss = -ops.log(ops.exp(pos / temperature) / denom)
    return ops.mean(loss)
