class CNNEncoder(nn.Cell):
    def __init__(self, out_dim=256):
        super().__init__()
        self.features = nn.SequentialCell([
            nn.Conv2d(3, 64, kernel_size=3, padding=1, pad_mode="pad"),
            # 关键：使用 GroupNorm 适应小 Batch Size
            nn.GroupNorm(8, 64), 
            nn.ReLU(),
            # ... 后续下采样层 ...
        ])
    def construct(self, x):
        x = self.features(x)
        return ops.ReduceMean(keep_dims=False)(x, (2, 3))
