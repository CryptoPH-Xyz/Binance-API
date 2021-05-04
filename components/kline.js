import { data } from 'autoprefixer';
import { createChart } from 'lightweight-charts';

  const chart = createChart({ data }, document.getElementById('chart'), {
    width: 600,
    height: 300,
      timeScale: {
        timeVisible: true,
        borderColor: '#D1D4DC',
          },
    rightPriceScale: {
        borderColor: '#D1D4DC',
    },
     layout: {
      backgroundColor: '#ffffff',
      textColor: '#000',
    },
    grid: {
      horzLines: {
        color: '#F0F3FA',
      },
      vertLines: {
        color: '#F0F3FA',
      },
    },
  })
  
  const candleSeries = chart.addCandlestickSeries({
    upColor: '#20991F',
    downColor: '#DE1616',
    borderDownColor: '#DE1616',
    borderUpColor: '#20991F',
    wickDownColor: '#DE1616',
    wickUpColor: '#20991F',
  })

  candleSeries.setData([
  { time: data.E , open: data.k.o , high: data.k.h , low: data.k.l , close: data.k.l }
  ])


export const getServerSideProps = async () => {
  const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m`)
  const orders = await res.json()

  return {
      props: { data }
  }
}

