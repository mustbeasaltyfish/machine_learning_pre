# 训练循环中的 Beta 调度 (KL Annealing)
progress = global_step / max(1, total_steps - 1)
# 线性增加 KL 散度的权重，防止训练初期塌陷
ramp = progress * (1 / WARMUP_RATIO) if progress < WARMUP_RATIO else 1.0
beta = MIN_BETA + (MAX_BETA - MIN_BETA) * ramp
total_loss = recon_loss + beta * kl_loss
