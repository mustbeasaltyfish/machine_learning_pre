class ProjectionHead(nn.Cell):
    def __init__(self, in_dim, proj_dim=128):
        super().__init__()
        # 2层 MLP 结构，将特征映射至对比空间
        self.net = nn.SequentialCell([
            nn.Dense(in_dim, in_dim),
            nn.LayerNorm((in_dim,)),
            nn.ReLU(),
            nn.Dense(in_dim, proj_dim)
        ])
