# SEO 警报配置

**配置日期**: 2025-04-22  
**域名**: byd-distributor.com  
**监控关键词**: 12个核心关键词

---

## 警报规则

### 🔴 Critical 警报（立即响应）

| 条件 | 阈值 | 响应时间 | 通知方式 |
|------|------|---------|---------|
| 排名大幅下降 | 下降 ≥5位 | 24小时内 | 邮件+Slack |
| 跌出Top 50 | 排名 >50 | 立即 | 邮件+Slack |
| 页面被删除索引 | 索引状态变化 | 立即 | 邮件+Slack |

### 🟡 High 警报（48小时内响应）

| 条件 | 阈值 | 响应时间 | 通知方式 |
|------|------|---------|---------|
| 排名小幅下降 | 下降 3-5位 | 48小时内 | 邮件 |
| 流量下降 | -15% WoW | 48小时内 | 邮件 |
| 竞争对手超越 | 被超越 | 48小时内 | 邮件 |

### 🟢 Info 警报（记录分析）

| 条件 | 阈值 | 响应时间 | 通知方式 |
|------|------|---------|---------|
| 排名上升 | 上升 ≥5位 | 记录 | 周报 |
| 进入Top 10 | 排名进入前10 | 记录 | 周报 |
| AI Overview出现 | 首次出现 | 记录 | 周报 |

---

## 监控关键词列表

### P0 优先级（Critical监控）
- byd electronic distributor
- byd igbt distributor
- byd distributor usa
- byd distributor germany
- authorized byd distributor

### P1 优先级（High监控）
- byd semiconductor distributor
- byd mcu distributor
- byd sic distributor
- byd distributor india
- byd distributor singapore
- byd distributor japan
- byd sensor germany

---

## 响应计划

### 排名下降≥5位响应流程

1. **确认数据** - 检查是否为工具误差
2. **技术检查** - 页面是否正常访问
3. **SERP分析** - 查看竞争对手变化
4. **内容审查** - 检查页面内容是否被修改
5. **制定恢复计划** - 24小时内提交方案

### 跌出Top 50紧急响应

1. **检查索引状态** - site:byd-distributor.com/page
2. **检查robots.txt** - 确认无阻止规则
3. **检查canonical** - 确认无错误设置
4. **检查技术问题** - 404、重定向链等
5. **启动全面审计** - 技术+内容+外链

---

## 当前警报状态

✅ **系统正常** - 无活跃警报

**最后检查**: 2025-04-22

---

*由 alert-manager 技能配置*
