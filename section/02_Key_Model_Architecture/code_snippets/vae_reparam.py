def reparameterize(self, mu, logvar):
    # 将对数方差转为标准差
    std = ops.exp(0.5 * logvar) 
    # 从标准正态分布采样噪声 epsilon
    eps = ops.standard_normal(mu.shape) 
    # 核心：z = mu + sigma * eps (重参数化技巧)
    z = mu + eps * std 
    return z
